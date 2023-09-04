import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { __getPostList, __submitPost } from '../redux/modules/post.js';
import Header from '../components/common/Header.jsx';
import Navbar from '../components/common/Navbar.jsx';
import PostComposer from '../components/mainpage/PostComposer.jsx';
import Searchbar from '../components/mainpage/Searchbar.jsx';
import ListCard from '../components/mainpage/ListCard.jsx';

const MainPage = () => {
  const dispatch = useDispatch();

  // API 쿼리
  const [query, setQuery] = useState({
    page: 1,
    search: '',
    sort: 'desc',
  });

  // 게시글 목록
  const [posts, setPosts] = useState([]);

  // PostComposer와 Searchbar를 토글
  const [isSearch, setIsSearch] = useState(false);

  const getPosts = async () => {
    await dispatch(__getPostList(query))
      .then((res) => {
        setPosts(res.payload.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // FormData 생성
  const formatData = (e) => {
    const formData = new FormData();
    const content = e.target[0].value;
    const images = Array.from(e.target[1].files);

    formData.append('images', images);

    return { content: content, image_urls: formData };
  };

  // 파일 서버에 전송
  const submitPost = async (e) => {
    e.preventDefault();

    const formattedData = formatData(e);

    await dispatch(__submitPost(formattedData))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, [query]);

  return (
    <>
      <Header />
      {isSearch ? (
        <Searchbar query={query} setQuery={setQuery} />
      ) : (
        <PostComposer submitPost={submitPost} />
      )}
      <section className='flex flex-col md:flex-row'>
        <ListCard posts={posts} />
        <Navbar setQuery={setQuery} setIsSearch={setIsSearch} />
      </section>
      <footer>
        <address> © 2023. Pixstar. All rights reserved.</address>
      </footer>
    </>
  );
};

export default MainPage;

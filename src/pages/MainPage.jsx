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
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <div className='px-4 py-8 md:px-8 md:py-12'>
        {isSearch ? (
          <Searchbar query={query} setQuery={setQuery} />
        ) : (
          <PostComposer submitPost={submitPost} />
        )}
        <section className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-4'>
          <main className='md:col-span-3'>
            <ListCard posts={posts} />
          </main>
          <aside className='md:col-span-1'>
            <Navbar setQuery={setQuery} setIsSearch={setIsSearch} />
          </aside>
        </section>
      </div>
      <footer className='fixed bottom-0 w-full p-4 pb-16 text-white bg-gray-900 md:pb-4'>
        <address>© 2023. Pixstar. All rights reserved.</address>
      </footer>
    </div>
  );
};

export default MainPage;

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { __getPostList } from '../redux/modules/post.js';
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
  const [posts, setPosts] = useState([]);

  // 홈 화면 리렌더링
  const [rerender, setRerender] = useState(false);

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

  useEffect(() => {
    getPosts();
  }, [query, rerender]);

  return (
    <>
      <Header />
      {isSearch ? <Searchbar setQuery={setQuery} /> : <PostComposer />}
      <section className='flex flex-col md:flex-row'>
        <ListCard posts={posts} />
        <Navbar
          rerender={rerender}
          setRerender={setRerender}
          setIsSearch={setIsSearch}
        />
      </section>
      <footer>
        <address> © 2023. Pixstar. All rights reserved.</address>
      </footer>
    </>
  );
};

export default MainPage;

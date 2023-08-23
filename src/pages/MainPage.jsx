import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getPostList } from '../redux/modules/post.js';
import Header from '../components/common/Header.jsx';

const MainPage = () => {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    dispatch(__getPostList())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div></div>
      </main>
    </>
  );
};

export default MainPage;

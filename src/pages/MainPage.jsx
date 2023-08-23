import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getPostList } from '../redux/modules/post.js';
import Header from '../components/common/Header.jsx';

const MainPage = () => {
  const dispatch = useDispatch();

  // API 쿼리
  const [query, setQuery] = useState({
    page: 1,
    search: '',
    sort: 'desc',
  });
  const [posts, setPosts] = useState([]);

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
  }, []);

  return (
    <>
      <Header />
      <main>
        {posts.map((post, id) => {
          return (
            <div key={id} className='border'>
              <div> 이미지: </div>
              <div> 내용: {post.content}</div>
              <div> 작성자: {post.writer}</div>
              <div> 좋아요 한 사람: {post.like}</div>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default MainPage;

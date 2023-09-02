import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __getPostDetail } from '../redux/modules/post';
import Header from '../components/common/Header.jsx';
import DetailCard from '../components/detailpage/DetailCard.jsx';

const DetailPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [post, setPost] = useState({
    id: 0,
    content: '',
    image_urls: [],
    like: [],
    created_at: '',
    updated_at: '',
    writer: {
      id: 0,
      email: '',
      username: '',
      profile_img: null,
    },
  });

  const getPostDetail = async () => {
    await dispatch(__getPostDetail(id))
      .then((res) => {
        setPost(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <>
      <Header />
      <DetailCard post={post} />
    </>
  );
};
export default DetailPage;

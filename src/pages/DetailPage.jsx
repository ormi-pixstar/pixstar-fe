import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __getPostDetail } from '../redux/modules/post';
import { __getComments, __writeComment } from '../redux/modules/comment.js';
import Header from '../components/common/Header.jsx';
import DetailCard from '../components/detailpage/DetailCard.jsx';
import CommentComposer from '../components/detailpage/CommentComposer.jsx';
import CommentList from '../components/detailpage/CommentList.jsx';

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
      image_url: null,
    },
  });
  const [comments, setComments] = useState([]);

  const getPostDetail = async () => {
    await dispatch(__getPostDetail(id))
      .then((res) => {
        setPost(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = async () => {
    await dispatch(__getComments(id))
      .then((res) => {
        setComments(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitComment = async (newComment) => {
    console.log(newComment);
    await dispatch(__writeComment({ id, newComment }))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostDetail();
    getComments();
  }, []);

  return (
    <>
      <Header />
      <DetailCard post={post} />
      <CommentList comments={comments} />
      <CommentComposer submitComment={submitComment} />
    </>
  );
};
export default DetailPage;

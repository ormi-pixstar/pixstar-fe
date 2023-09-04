import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __getProfile } from '../redux/modules/user.js';
import Header from '../components/common/Header.jsx';
import ProfileCard from '../components/profilepage/ProfileCard.jsx';
import Navbar from '../components/common/Navbar.jsx';

const ProfilePage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    id: 0,
    email: '',
    username: '',
    image_url: '',
  });

  const getProfile = async () => {
    await dispatch(__getProfile(id))
      .then((res) => {
        setUserInfo(res.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Header />
      <section className='flex flex-col md:flex-row'>
        <ProfileCard userInfo={userInfo} />
        <Navbar />
      </section>
    </>
  );
};
export default ProfilePage;

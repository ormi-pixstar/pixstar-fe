import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import profilePlaceholder from '../../assets/images/profilePlaceholder.svg';

const ProfileCard = ({ userInfo }) => {
  const { id } = useParams();
  const userId = useSelector((state) => state.user.id);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  console.log(userInfo);
  return (
    <div className='flex flex-col gap-4'>
      <h1>@{userInfo.username}</h1>
      <div className='w-1/3 overflow-hidden rounded-full'>
        <label
          htmlFor='image'
          className={`block w-full h-full ${isEdit ? 'cursor-pointer' : ''}`}
        >
          <i className='fas fa-camera'></i>
          <img
            src={userInfo.image_url || profilePlaceholder}
            alt='프로필 사진'
            className='w-full h-auto'
          />
        </label>
      </div>
      <div>
        <p>{userInfo.email}</p>
        <form>
          <label htmlFor='email'>계정</label>
          <input type='email' id='email' name='email' />
          <input type='file' id='image' />
          <input type='password' />
          <button type='submit'>저장</button>
        </form>
      </div>
      {id === userId ? (
        <button onClick={handleEditToggle}>프로필 수정</button>
      ) : null}
    </div>
  );
};
export default ProfileCard;

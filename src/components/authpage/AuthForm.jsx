import { useState } from 'react';
import AuthFormBtn from '../common/AuthFormBtn.jsx';

const AuthForm = ({ formType, onSubmit }) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitAuthForm = (e) => {
    e.preventDefault();

    let authToSend = { ...authData };

    if (
      formType === 'signup' &&
      authData.password !== authData.confirm_password
    ) {
      alert('Password가 일치하지 않습니다.');
      return;
    }

    // formType에 따라 API로 보낼 데이터를 결정
    if (formType === 'login') {
      delete authToSend.confirm_password;
    }

    onSubmit(authToSend);
  };

  return (
    <div className='flex items-center justify-center min-h-screen px-4 pb-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='text-3xl font-extrabold text-center text-gray-900 '>
            {formType === 'signup' ? '회원가입' : '로그인'}
          </h2>
        </div>
        <form onSubmit={submitAuthForm} className='space-y-4'>
          <input
            name='email'
            placeholder='이메일'
            type='email'
            value={authData.email}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded-md focus:border-blue-400'
          />
          <input
            name='password'
            placeholder='비밀번호'
            type='password'
            value={authData.password}
            onChange={handleInputChange}
            className='w-full px-4 py-2 border rounded-md focus:border-blue-400'
          />
          {formType === 'login' ? null : (
            <>
              <input
                name='confirm_password'
                placeholder='비밀번호 재확인'
                type='password'
                value={authData.confirm_password}
                onChange={handleInputChange}
                className='w-full px-4 py-2 border rounded-md focus:border-blue-400'
              />
            </>
          )}
          <AuthFormBtn
            name={formType === 'login' ? '로그인' : '회원가입'}
          />
        </form>
      </div>
    </div>
  );
};
export default AuthForm;

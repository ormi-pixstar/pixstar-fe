import { useState } from 'react';
import SubmitBtn from '../common/SubmitBtn.jsx';

const AuthForm = ({ formType, onSubmit }) => {
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
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
      authData.password !== authData.confirmPassword
    ) {
      alert('Password가 일치하지 않습니다.');
      return;
    }

    // formType에 따라 API로 보낼 데이터를 결정
    if (formType === 'signup') {
      delete authToSend.confirmPassword;
    }

    onSubmit(authToSend);
  };

  return (
    <form onSubmit={submitAuthForm}>
      <input
        name='email'
        placeholder='이메일'
        type='email'
        value={authData.email}
        onChange={handleInputChange}
      />
      <input
        name='password'
        placeholder='비밀번호'
        type='password'
        value={authData.password}
        onChange={handleInputChange}
      />
      {formType === 'login' ? null : (
        <>
          <input
            name='confirmPassword'
            placeholder='비밀번호 재확인'
            type='password'
            value={authData.confirmPassword}
            onChange={handleInputChange}
          />
        </>
      )}
      <SubmitBtn
        name={formType === 'login' ? '로그인' : '회원가입'}
      />
    </form>
  );
};
export default AuthForm;

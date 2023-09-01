import SubmitBtn from '../common/SubmitBtn.jsx';

const AuthForm = ({ formType, setAuthData }) => {
  const submitAuthForm = (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[name="email"]').value;
    const password = e.target.querySelector('input[name="password"]').value;
    const formValue = { email, password };

    if (formType === 'signup') {
      formValue.confirmPassword = e.target.querySelector(
        'input[name="confirmPassword"]'
      ).value;
      formValue.nickname = e.target.querySelector(
        'input[name="nickname"]'
      ).value;
    }

    setAuthData(formValue);
  };

  return (
    <form onSubmit={(e) => submitAuthForm(e)}>
      <input name='email' placeholder='이메일' type='email' />
      <input name='password' placeholder='비밀번호' type='password' />
      {formType === 'login' ? null : (
        <>
          <input
            name='confirmPassword'
            placeholder='비밀번호 재확인'
            type='password'
          />
          <input name='nickname' placeholder='닉네임' type='text' />
        </>
      )}
      <SubmitBtn
        name={formType === 'login' ? '로그인' : '회원가입'}
      />
    </form>
  );
};
export default AuthForm;

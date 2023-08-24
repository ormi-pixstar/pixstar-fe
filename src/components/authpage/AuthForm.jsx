import SubmitBtn from '../common/SubmitBtn.jsx';

const AuthForm = ({ formType }) => {
  return (
    <form>
      <input placeholder='이메일' />
      <input placeholder='비밀번호' />
      {formType === 'login' ? null : (
        <>
          <input placeholder='비밀번호 재확인' />
          <input placeholder='닉네임' />
        </>
      )}
      <SubmitBtn
        name={formType === 'login' ? '로그인' : '회원가입'}
      />
    </form>
  );
};
export default AuthForm;

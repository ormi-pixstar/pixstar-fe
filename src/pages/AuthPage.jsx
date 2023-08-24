import AuthForm from '../components/authpage/AuthForm.jsx';

const AuthPage = ({ formType }) => {
  return (
    <>
      <AuthForm formType={formType} />
    </>
  );
};

export default AuthPage;

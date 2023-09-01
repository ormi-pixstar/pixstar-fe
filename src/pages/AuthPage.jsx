import { useDispatch } from 'react-redux';
import { __signup, __login } from '../redux/modules/user.js';
import AuthForm from '../components/authpage/AuthForm.jsx';

const AuthPage = ({ formType }) => {
  const dispatch = useDispatch();

  const submitAuthData = async (authData) => {
    await dispatch(
      formType === 'signup' ? __signup(authData) : __login(authData)
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <AuthForm formType={formType} onSubmit={submitAuthData} />
    </>
  );
};

export default AuthPage;

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __signup, __login } from '../redux/modules/user.js';
import AuthForm from '../components/authpage/AuthForm.jsx';

const AuthPage = ({ formType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitAuthData = async (authData) => {
    await dispatch(
      formType === 'signup' ? __signup(authData) : __login(authData)
    )
      .then((res) => {
        if (res.type === 'signup/fulfilled' || res.type === 'login/fulfilled') {
          formType === 'signup' ? navigate('/login') : navigate('/');
        }
      })
      .catch((err) => {
        alert('서버 연결에 문제가 발생했습니다.');
        console.log(err);
      });
  };

  return <AuthForm formType={formType} onSubmit={submitAuthData} />;
};

export default AuthPage;

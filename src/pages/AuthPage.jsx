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
        formType === 'signup' ? navigate('/login') : navigate('/');
      })
      .catch((err) => {
        alert('서버 연결에 문제가 발생했습니다.');
        console.log(err);
      });
  };

  return (
    <div className='flex items-center justify-center min-h-screen px-4 pb-12 bg-gray-50 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='text-3xl font-extrabold text-center text-gray-900 '>
            {formType === 'signup' ? '회원가입' : '로그인'}
          </h2>
        </div>
        <AuthForm formType={formType} onSubmit={submitAuthData} />
      </div>
    </div>
  );
};

export default AuthPage;

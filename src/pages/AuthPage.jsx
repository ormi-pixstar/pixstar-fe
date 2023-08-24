import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { __signup, __login } from '../redux/modules/user.js';
import AuthForm from '../components/authpage/AuthForm.jsx';

const AuthPage = ({ formType }) => {
  const dispatch = useDispatch();

  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const submitAuthData = async () => {
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

  useEffect(() => {
    submitAuthData();
  }, []);

  return (
    <>
      <AuthForm formType={formType} setAuthData={setAuthData} />
    </>
  );
};

export default AuthPage;

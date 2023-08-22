// Aixos
import setToken from './axios/setToken';
// Redux
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/modules/user';
// Router
import Router from './router/Router';

const App = () => {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  // if (accessToken) {
  //   setToken(accessToken);
  //   dispatch(setLogin(true));
  // }

  return <Router />;
};

export default App;

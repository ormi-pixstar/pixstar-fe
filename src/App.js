import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restoreUser } from './redux/modules/user.js';
import Router from './router/Router';

const App = () => {
  const dispatch = useDispatch();

  // 로컬스토리지에 저장된 유저 정보를 Redux store에 복원
  useEffect(() => {
    const isLog = localStorage.getItem('isLog');
    if (isLog) {
      dispatch(
        restoreUser({
          id: localStorage.getItem('id'),
          username: localStorage.getItem('username'),
          isLog: isLog,
        })
      );
    }
  });

  return <Router />;
};

export default App;

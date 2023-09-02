// Redux
import { useDispatch } from 'react-redux';
import { setLogin } from './redux/modules/user';
// Router
import Router from './router/Router';

const App = () => {
  const dispatch = useDispatch();

  return <Router />;
};

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NotfoundPage from './pages/NotfoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import NotfoundPage from '../pages/NotfoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

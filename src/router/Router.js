import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import DetailPage from '../pages/DetailPage.jsx';
import SearchPage from '../pages/SearchPage.jsx';
import NotfoundPage from '../pages/NotfoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<AuthPage formType='login' />} />
        <Route path='/signup' element={<AuthPage formType='signup' />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

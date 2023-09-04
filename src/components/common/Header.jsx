import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <header className='flex items-center justify-between p-4 text-white bg-blue-500'>
      {path === '/' ? null : (
        <button onClick={() => navigate(-1)} className='block p-2 md:hidden'>
          <i className='fas fa-arrow-left'></i>
        </button>
      )}
      <Link to='/'>
        <h1 className='text-2xl font-bold'>Pixstar</h1>
      </Link>
    </header>
  );
};

export default Header;

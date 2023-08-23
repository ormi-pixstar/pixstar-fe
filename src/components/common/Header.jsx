import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  return (
    <header className='flex gap-2'>
      {path === '/' ? null : (
        <button onClick={() => navigate(-1)} className='block md:hidden'>
          {'<'}
        </button>
      )}
      <h1>Pixstar</h1>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='md:bg-gray-100 md:m-4'>
      <ul className='flex flex-row md:flex-col md:gap-2'>
        <li>
          <Link to='/profile'>
            <i class='fas fa-user fa-2x mr-2'></i>
            <span className='hidden md:inline-block'>Profile</span>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i class='fas fa-home fa-2x mr-2'></i>
            <span className='hidden md:inline-block'>Home</span>
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <i class='fas fa-sign-in-alt fa-2x mr-2'></i>
            <span className='hidden md:inline-block'>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

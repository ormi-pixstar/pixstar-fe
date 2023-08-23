import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/profile'>
            <i class='fas fa-user'></i>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i class='fas fa-home'></i>
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <i class='fas fa-sign-in-alt'></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

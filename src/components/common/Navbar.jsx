import { Link } from 'react-router-dom';

const Navbar = ({ rerender, setRerender, setIsSearch }) => {
  // 메인화면 리렌더링
  const convertToPostComposer = () => {
    setIsSearch(false);
    setRerender(!rerender);
  };

  // 검색창 활성화
  const convertToSearchbar = () => {
    setIsSearch(true);
  };

  return (
    <nav className='md:bg-gray-100 md:m-4'>
      <ul className='flex flex-row md:flex-col md:gap-2'>
        <li>
          <Link to='/profile'>
            <i className='mr-2 fas fa-user fa-2x'></i>
            <span className='hidden md:inline-block'>마이페이지</span>
          </Link>
        </li>
        <li>
          <Link to='/' onClick={convertToPostComposer}>
            <i className='mr-2 fas fa-home fa-2x'></i>
            <span className='hidden md:inline-block'>홈</span>
          </Link>
        </li>
        <li>
          <Link to='/' onClick={convertToSearchbar}>
            <i className='mr-2 fas fa-search fa-2x'></i>
            <span className='hidden md:inline-block'>검색</span>
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <i className='mr-2 fas fa-sign-in-alt fa-2x'></i>
            <span className='hidden md:inline-block'>로그인</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

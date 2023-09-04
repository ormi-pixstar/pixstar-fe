import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ setQuery, setIsSearch }) => {
  // 로그인 유저 id값 조회
  const userId = useSelector((state) => state.user.id);

  // 메인화면 리렌더링
  const convertToPostComposer = () => {
    setIsSearch(false);
    // 포스트 리스트 초기화
    setQuery({
      page: 1,
      search: '',
      sort: 'desc',
    });
  };

  // 검색창 활성화
  const convertToSearchbar = () => {
    setIsSearch(true);
  };

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-10 w-full p-2 bg-gray-100 md:sticky md:top-0 md:m-4'>
      <ul className='flex flex-row justify-around md:flex-col md:gap-5'>
        <li className='bg-white rounded-md hover:text-blue-500 md:p-4'>
          <Link to={`/profile/${userId}`} className='flex items-center gap-2'>
            <i className='fas fa-user fa-2x'></i>
            <span className='hidden md:inline-block'>마이페이지</span>
          </Link>
        </li>
        <li className='bg-white rounded-md hover:text-blue-500 md:p-4'>
          <Link
            to='/'
            onClick={convertToPostComposer}
            className='flex items-center gap-2'
          >
            <i className='fas fa-home fa-2x'></i>
            <span className='hidden md:inline-block'>홈</span>
          </Link>
        </li>
        <li className='bg-white rounded-md hover:text-blue-500 md:p-4'>
          <Link
            to='/'
            onClick={convertToSearchbar}
            className='flex items-center gap-2'
          >
            <i className='fas fa-search fa-2x'></i>
            <span className='hidden md:inline-block'>검색</span>
          </Link>
        </li>
        <li className='bg-white rounded-md hover:text-blue-500 md:p-4'>
          <Link to='/login' className='flex items-center gap-2'>
            <i className='fas fa-sign-in-alt fa-2x'></i>
            <span className='hidden md:inline-block'>로그인</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

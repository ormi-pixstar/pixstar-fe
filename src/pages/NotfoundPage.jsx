import { Link } from 'react-router-dom';

const NotfoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50'>
      <h1 className='mb-8 text-6xl font-extrabold text-blue-700 shadow-lg'>
        PIXSTAR
      </h1>
      <h2 className='mb-4 text-5xl font-bold text-gray-900'>404</h2>
      <p className='mb-8 text-xl text-gray-600'>페이지를 찾을 수 없습니다.</p>
      <Link to='/'>
        <button className='px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
          메인화면으로 돌아가기
        </button>
      </Link>
    </div>
  );
};

export default NotfoundPage;

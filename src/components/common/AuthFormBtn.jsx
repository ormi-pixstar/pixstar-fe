const AuthFormBtn = ({ name }) => {
  return (
    <button className='px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
      {name}
    </button>
  );
};
export default AuthFormBtn;

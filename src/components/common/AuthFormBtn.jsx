const AuthFormBtn = ({ name }) => {
  return (
    <button className='w-full px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600'>
      {name}
    </button>
  );
};

export default AuthFormBtn;

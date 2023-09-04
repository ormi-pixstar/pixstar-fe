const PostComposer = ({ submitPost }) => {
  return (
    <div className='p-4 bg-white border rounded-md'>
      <form
        onSubmit={submitPost}
        className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'
      >
        <div className='flex-grow'>
          <input
            type='text'
            placeholder='일상을 공유하세요!'
            className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='relative'>
          <input
            type='file'
            accept='image/*'
            className='absolute z-10 w-full h-full opacity-0 cursor-pointer'
            multiple
            required
          />
          <button
            type='file'
            className='flex items-center justify-center w-full h-10 px-4 py-2 text-center bg-gray-200 border rounded-md cursor-pointer hover:bg-gray-400 '
          >
            사진 선택
          </button>
        </div>
        <button
          type='submit'
          className='px-4 py-2 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          업로드
        </button>
      </form>
    </div>
  );
};

export default PostComposer;

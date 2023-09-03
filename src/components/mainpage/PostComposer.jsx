const PostComposer = ({ submitPost }) => {
  return (
    <div className='border'>
      <form onSubmit={submitPost} className='flex'>
        <div>
          <input type='text' placeholder='일상을 공유하세요!' required />
        </div>
        <div>
          <input type='file' accept='image/*' multiple required />
        </div>
        <button type='submit'>업로드</button>
      </form>
    </div>
  );
};

export default PostComposer;

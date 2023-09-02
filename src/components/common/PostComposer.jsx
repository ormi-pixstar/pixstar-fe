import { useState } from 'react';

const PostComposer = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(content, images);

    // 작성한 글과 이미지 초기화
    setContent('');
    setImages([]);
  };

  return (
    <div className='border'>
      <form onSubmit={handleSubmit} className='flex'>
        <div>
          <input
            type='text'
            id='content'
            name='content'
            placeholder='일상을 공유하세요!'
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <div>
          <input
            type='file'
            id='images'
            name='images'
            accept='image/*'
            onChange={handleImageChange}
            multiple
            required
          />
        </div>
        <button type='submit'>업로드</button>
      </form>
    </div>
  );
};

export default PostComposer;

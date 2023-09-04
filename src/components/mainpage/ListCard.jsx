import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../assets/images/profilePlaceholder.svg';

const ListCard = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <main className='p-4 space-y-4'>
      <article className='space-y-6'>
        {posts?.map((post, id) => {
          return (
            <div
              key={id}
              className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50'
              onClick={() => navigate(`/detail/${post.id}`)}
            >
              <div className='flex items-center gap-4'>
                <img
                  src={post.writer.image_url || profilePlaceholder}
                  alt='프로필사진'
                  className='w-12 h-12 border border-gray-200 rounded-full'
                />
                <p className='text-lg font-medium'>@ {post.writer.username}</p>
              </div>
              <div className='overflow-x-scroll hide-scrollbar'>
                <div className='flex gap-2'>
                  {post.image_urls.map((imageUrl, imgId) => {
                    return (
                      <div key={imgId} className='relative flex-none'>
                        <img
                          src={imageUrl.image_url}
                          alt='게시글 사진'
                          className='w-[50vh] h-[40vh] object-cover rounded-md shadow-lg'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <i className='text-red-500 far fa-heart'></i>
                <span>{post.like.length}</span>
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default ListCard;

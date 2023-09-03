import { useNavigate } from 'react-router-dom';
import profilePlaceholder from '../../assets/images/profilePlaceholder.svg';

const ListCard = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <main>
      <article className='flex flex-col gap-4'>
        {posts?.map((post, id) => {
          return (
            <div
              key={id}
              id='postCard'
              className='flex flex-col gap-2 p-4 rounded-lg'
              onClick={() => navigate(`/detail/${post.id}`)}
            >
              <div className='flex items-center gap-2'>
                <img
                  src={post.writer.image_url || profilePlaceholder}
                  alt='프로필사진'
                  className='w-12 h-12 rounded-full'
                />
                <p className='text-lg'>{post.writer.username}</p>
              </div>
              <div className='cursor-pointer'>
                <div className='mb-4 text-lg'> {post.content}</div>
                <img
                  src={post.image_urls[0]?.image_url}
                  alt='게시글 사진'
                  className='max-w-[50vh] h-[40vh] object-cover rounded-lg shadow-md'
                />
              </div>
              <div className='flex items-center gap-2'>
                <i className='text-red-500 far fa-heart'></i>
                {post.like.length}
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default ListCard;

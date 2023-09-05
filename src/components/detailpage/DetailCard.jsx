import { Link } from 'react-router-dom';
import getFormattedTimeAgo from '../../utils/getFormattedTimeAgo';
import profilePlaceholder from '../../assets/images/profilePlaceholder.svg';

const DetailCard = ({ post }) => {
  const formattedTimeAgo = getFormattedTimeAgo(post.created_at);

  return (
    <section className='p-4 m-4 bg-white rounded-lg shadow-md'>
      <div className='flex items-center justify-between p-2 mb-4 bg-gray-100 rounded-md'>
        <Link
          to={`/profile/${post.writer.id}`}
          className='flex gap-2 cursor-pointer'
        >
          <img
            src={post.writer.image_url || profilePlaceholder}
            alt='프로필사진'
            className='w-8 h-8 rounded-full'
          />
          <p className='text-xl font-medium'>@{post.writer.username}</p>
        </Link>
        <p className='text-gray-600'>{formattedTimeAgo}</p>
      </div>
      <main className='mb-4'>
        <div className='flex w-full gap-4 overflow-x-scroll'>
          {post.image_urls.map((image, i) => {
            return (
              <img
                key={i}
                src={image.image_url}
                alt='게시글 사진'
                className='h-[50vh] object-cover rounded-lg shadow-md'
              />
            );
          })}
        </div>
        <p className='mt-4 text-lg'>{post.content}</p>
      </main>
      <div></div>
      <div className='flex items-center gap-2 text-gray-700'>
        <i className='text-red-500 far fa-heart'></i>
        {post.like.length}
      </div>
    </section>
  );
};

export default DetailCard;

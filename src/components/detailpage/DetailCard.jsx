import getFormattedTimeAgo from '../../utils/getFormattedTimeAgo';
import profilePlaceholder from '../../assets/images/profilePlaceholder.svg';

const DetailCard = ({ post }) => {
  const formattedTimeAgo = getFormattedTimeAgo(post.created_at);

  return (
    <section>
      <div className='w-[100%] flex items-center justify-between'>
        <div className='flex gap-2'>
          <img
            src={post.writer.image_url || profilePlaceholder}
            alt='프로필사진'
            className='w-8 h-8 rounded-full'
          />
          <p className='text-xl'>{post.writer.username}</p>
        </div>
        <p>{formattedTimeAgo}</p>
      </div>
      <main>
        <div className='w-[50vw] flex gap-4'>
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
        <p>{post.content}</p>
      </main>
      <div className='flex items-center gap-2'>
        <i className='far fa-heart'></i>
        {post.like.length}
      </div>
    </section>
  );
};
export default DetailCard;

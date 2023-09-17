import convertToKoreanDate from '../../utils/convertToKoreanDate.js';

const CommentCard = ({ comment }) => {
  const formattedDate = convertToKoreanDate(comment.created_at);

  return (
    <div className='mb-4'>
      <div className='flex items-center gap-4 p-3 bg-white rounded-lg shadow-md'>
        <p className='text-blue-600'>@{comment.writer.username}</p>
        <p className='flex-grow text-xl'>{comment.comment}</p>
        <p className='text-sm text-gray-500'>{formattedDate}</p>
      </div>
      {comment.reply && (
        <div className='mt-2 ml-6'>
          {comment.reply.map((replyComment, i) => (
            <CommentCard key={i} comment={replyComment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentCard;

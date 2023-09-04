import convertToKoreanDate from '../../utils/convertToKoreanDate.js';

const CommentCard = ({ comment }) => {
  const formattedDate = convertToKoreanDate(comment.created_at);

  return (
    <div>
      <div className='flex gap-4 items-center'>
        <p className='text-xl'>{comment.comment}</p>
        <p>{formattedDate}</p>
      </div>
      <div className='ml-4 border-l-2 p-4'>
        {comment.reply
          ? comment.reply?.map((comment, i) => {
              return <CommentCard key={i} comment={comment} />;
            })
          : null}
      </div>
    </div>
  );
};
export default CommentCard;

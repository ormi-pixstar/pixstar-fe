import convertToKoreanDate from '../../utils/convertToKoreanDate.js';

const CommentCard = ({ comment }) => {
  const formattedDate = convertToKoreanDate(comment.created_at);

  console.log(comment);

  return (
    <div>
      <div className='flex items-center gap-4'>
        <p>@{comment.writer.username}</p>
        <p className='text-xl'>{comment.comment}</p>
        <p>{formattedDate}</p>
      </div>
      <div className='p-4 ml-4 border-l-2'>
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

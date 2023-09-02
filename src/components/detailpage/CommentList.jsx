import CommentCard from './CommentCard.jsx';

const CommentList = ({ comments }) => {
  return (
    <div>
      <ul>
        <li>
          {comments?.map((comment, i) => {
            return <CommentCard key={i} comment={comment} />;
          })}
        </li>
      </ul>
    </div>
  );
};
export default CommentList;

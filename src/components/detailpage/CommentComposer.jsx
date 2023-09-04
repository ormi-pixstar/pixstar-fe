import { useState } from 'react';

const CommentComposer = ({ submitComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    submitComment(newComment);
    setNewComment('');
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type='text'
          id='commentInput'
          placeholder='댓글 남기기'
          value={newComment}
          onChange={handleCommentChange}
          required
        />
        <button type='submit'>
          <i className='far fa-paper-plane text-2xl'></i>
        </button>
      </form>
    </div>
  );
};
export default CommentComposer;

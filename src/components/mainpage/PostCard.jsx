import { useNavigate } from 'react-router-dom';

const PostCard = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <main>
      <article>
        {posts.map((post, id) => {
          return (
            <div
              key={id}
              className='border'
              onClick={() => navigate(`/detail/${post.id}`)}
            >
              <div> 이미지: </div>
              <div> 내용: {post.content}</div>
              <div> 작성자: {post.writer}</div>
              <div> 좋아요 한 사람: {post.like}</div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

export default PostCard;

const DetailCard = ({ post }) => {
  console.log(post);
  return (
    <main>
      {/* <p>작성자: {post.writer}</p>
      <img src={post.images} />
      <p>내용: {post.content}</p> */}
      <div>
        <i className='far fa-heart'></i>
        <i className='fas fa-heart'></i>
      </div>
    </main>
  );
};
export default DetailCard;

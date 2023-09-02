const DetailCard = ({ post }) => {
  return (
    <main>
      {/* <p>작성자: {post.writer}</p>
      <img src={post.images} />
      <p>내용: {post.content}</p> */}
      <div>
        <i class='far fa-heart'></i>
        <i class='fas fa-heart'></i>
      </div>
    </main>
  );
};
export default DetailCard;

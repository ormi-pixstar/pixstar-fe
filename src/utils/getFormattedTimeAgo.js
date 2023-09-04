const getFormattedTimeAgo = (created_at) => {
  const createdDate = new Date(created_at);
  const today = new Date();
  const timeDifference = today - createdDate;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let formattedTimeAgo = '';

  if (daysAgo < 1) {
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    formattedTimeAgo = `${hoursAgo}시간 전`;
  } else {
    formattedTimeAgo = `${daysAgo}일 전`;
  }

  return formattedTimeAgo;
};
export default getFormattedTimeAgo;

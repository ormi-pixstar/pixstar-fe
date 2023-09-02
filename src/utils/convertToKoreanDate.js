const convertToKoreanDate = (dateString) => {
  const options = { month: 'long', day: 'numeric' };
  const date = new Date(dateString);

  return date.toLocaleDateString('ko-KR', options);
};
export default convertToKoreanDate;

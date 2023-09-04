const Searchbar = ({ query, setQuery }) => {
  const handleQuerySubmit = (e) => {
    e.preventDefault();

    setQuery((prevQuery) => ({
      ...prevQuery,
      search: e.target.value,
    }));
  };

  return (
    <div className='p-4'>
      <form className='flex items-center p-2 bg-gray-200 rounded-lg'>
        <input
          type='text'
          placeholder='게시글 또는 @닉네임을 검색하세요'
          value={query.search}
          onChange={handleQuerySubmit}
          className='flex-grow p-2 bg-transparent rounded-lg focus:outline-none'
        />
      </form>
    </div>
  );
};
export default Searchbar;

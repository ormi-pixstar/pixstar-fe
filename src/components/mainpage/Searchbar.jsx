const Searchbar = ({ query, setQuery }) => {
  const handleQuerySubmit = (e) => {
    e.preventDefault();

    setQuery((prevQuery) => ({
      ...prevQuery,
      search: e.target.value,
    }));
  };

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='게시글 또는 @닉네임을 검색하세요'
          value={query.search}
          onChange={handleQuerySubmit}
        />
        <button type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};
export default Searchbar;

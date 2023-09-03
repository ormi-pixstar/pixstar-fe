import { useState } from 'react';

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='검색어를 입력하세요.'
          value={searchText}
          onChange={handleSearchChange}
        />
        <button type='submit'>검색</button>
      </form>
    </div>
  );
};
export default Searchbar;

import React from 'react';
import './searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchProducts } from '../../../reducer/Reducer';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleData = () => {
    if (search) {
      dispatch(fetchSearchProducts(search));
    } else {
      alert('please write something');
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      dispatch(fetchSearchProducts(search));
      console.log('i am running ');
    }
  };

  return (
    <div>
      <div className='input_wrapper'>
        <input
          onChange={handleSearch}
          onKeyUp={handleEnterKey}
          type='text'
          placeholder='search...'
        />
        <button onClick={handleData}>
          <SearchIcon style={{ color: 'silver' }} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

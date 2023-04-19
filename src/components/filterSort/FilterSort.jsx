import React from 'react';
import SearchBar from './searchBar/SearchBar';
import './filtersort.css';
import Categories from './categories/Categories';
import RatingFilter from './rating/RatingFilter';

const FilterSort = () => {
  return (
    <>
      <div className='main_filter'>
        <div className='searchBarr'>
          <SearchBar />
        </div>
        <div className='filter_rating'>
          <RatingFilter />
        </div>
        <div className='category_section'>
          <Categories />
        </div>
      </div>
    </>
  );
};

export default FilterSort;

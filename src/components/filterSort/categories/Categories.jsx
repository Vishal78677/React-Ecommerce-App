import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './categories.css';
import { fetchCategoryProducts } from '../../../reducer/Reducer';
import { useDispatch } from 'react-redux';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const getCategory = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/categories`);
      setCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategory = (category) => {
    window.scrollTo({ top: '0', behavior: 'smooth' });
    dispatch(fetchCategoryProducts(category));
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <h2>Categories</h2>
      <hr style={{ opacity: '0.15' }} />
      <div className='categories'>
        {category ? (
          category.map((curCate) => {
            return (
              <div className='cate_h3' key={curCate}>
                <h3
                  className='style_h3'
                  onClick={() => handleCategory(curCate)}
                >
                  {curCate}
                </h3>
              </div>
            );
          })
        ) : (
          <h1> No Data </h1>
        )}
      </div>
    </>
  );
};

export default Categories;

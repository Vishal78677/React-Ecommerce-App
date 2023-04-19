import React from 'react';

// import oppo from './images/oppo.png';
import oppo from './images/laptop.png';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  fetchCategoriesData,
  fetchCategoryProducts,
} from '../../reducer/Reducer';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ img, title, cate, setProductData }) => {
  return (
    <div className='productCard'>
      <div className='imgWrapper'>
        <img src={img} alt={title} />
      </div>
      <div className='pContent'>
        <span className='titleP'>{title}</span>
        <Button
          onClick={() => setProductData(cate)}
          sx={{ color: 'red', textTransform: 'capitalize' }}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

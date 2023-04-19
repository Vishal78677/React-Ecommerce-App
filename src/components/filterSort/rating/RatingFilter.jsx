import React, { useEffect } from 'react';
import './ratingF.css';
import { useState } from 'react';
import { Rating } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  setEmptyRatingProducts,
  setProductRating,
} from '../../../reducer/Reducer';

const RatingFilter = () => {
  const { products, ratingProducts } = useSelector((state) => state.shopping);
  const [valueR, setValueR] = useState(0);

  const dispatch = useDispatch();

  const handleRating = (event, newValue) => {
    console.log(newValue);

    setValueR(newValue);

    dispatch(setProductRating(newValue));
  };

  useEffect(() => {
    setValueR(0);
    dispatch(setEmptyRatingProducts());
  }, [products]);

  return (
    <div className='ratingFilter'>
      <h2>Filter by rating</h2>
      <hr />
      <Rating name='simple-controlled' value={valueR} onChange={handleRating} />
    </div>
  );
};

export default RatingFilter;

import { Slider } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMaxPrice,
  setRangePrice,
  setRangeProducts,
} from '../../../reducer/Reducer';
import './sliderfil.css';

const SliderFil = () => {
  const { maxPrice, products, minPrice, price } = useSelector(
    (state) => state.shopping
  );
  console.log('🚀 ~ file: SliderFil.jsx:10 ~ SliderFil ~ price:', maxPrice);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;

    dispatch(setRangePrice(event.target.value));
  };

  useEffect(() => {
    dispatch(setMaxPrice());
  }, [products, price, maxPrice]);

  useEffect(() => {
    dispatch(setRangeProducts());
  }, [price]);

  return (
    <>
      <div className='main_slider'>
        <div className='price-tag'>
          <h3>Price range</h3>
          <hr style={{ opacity: '0.15' }} />
        </div>
        <div className='slider-price'>
          <p>${price}</p>
          <input
            type='range'
            value={price}
            max={maxPrice}
            min={minPrice}
            name='priceSlider'
            onChange={handleChange}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
      </div>
    </>
  );
};

export default SliderFil;

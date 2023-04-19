import React, { useState } from 'react';
import './sortitem.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import axios from 'axios';
import { FetchAllProducts } from '../../reducer/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setSortPro } from '../../reducer/Reducer';

const SortItems = () => {
  const [selectValue, setSelectValue] = useState('');
  const dispatch = useDispatch();
  // console.log(
  //   '🚀 ~ file: SortItems.jsx:12 ~ SortItems ~ selectValue',
  //   selectValue
  // );

  const { products, ratingProducts, loading } = useSelector(
    (state) => state.shopping
  );
  // console.log('🚀 ~ file: SortItems.jsx:19 ~ SortItems ~ products:', products);

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  useEffect(() => {
    dispatch(setSortPro(selectValue));
  }, [selectValue]);

  return (
    <>
      <div className='sort-main'>
        <div className='showing_items'>
          <p style={{ color: 'crimson' }}>
            {ratingProducts?.length > 0
              ? `${
                  loading
                    ? 0
                    : ratingProducts.length
                    ? ratingProducts.length
                    : 0
                } Total Products `
              : `${
                  loading ? 0 : products.length ? products.length : 0
                } Total Products `}
            {/* {loading ? 0 : products.length ? products.length : 0} Total Products } */}
          </p>
        </div>
        <div className='sort_section'>
          <div className='manage_sort'>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>sort-items</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectValue}
                label='sort-items'
                onChange={handleChange}
              >
                <MenuItem value={'highest'}>Price:- highest</MenuItem>
                <MenuItem value={'lowest'}>Price:- lowest</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortItems;

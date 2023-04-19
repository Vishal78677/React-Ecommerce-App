import React from 'react';
import { NavLink } from 'react-router-dom';
import './products.css';
import { Rating } from '@mui/material';

const ProductCard2 = ({
  thumbnail,
  title,
  price,
  sortDescription,
  id,
  rating,
}) => {
  // console.log('🚀 ~ file: ProductCard2.jsx:14 ~ rating:', typeof rating);

  return (
    <div className='cardd'>
      <div className='card_image'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='card_details'>
        <div className='name-price'>
          <h3 style={{ fontSize: '1.5rem' }}>{title} </h3>
          <h3 style={{ fontSize: '1rem' }}>${price}</h3>
        </div>
        <Rating name='read-only' value={rating} readOnly />
        <p style={{ fontSize: '0.9rem' }}>{sortDescription}...</p>
        <NavLink
          to={`/product/${id}`}
          style={{ width: '100%', display: 'flex' }}
        >
          <button className='addBtn'>Add to Cart</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard2;

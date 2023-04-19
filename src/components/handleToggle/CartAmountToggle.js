import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from 'react-redux';
import './handletoggle.css';

const CartAmountToggle = ({ qty, setIncrease, setDecrease }) => {
  return (
    <div className='QuantityWrapper'>
      <button
        className={qty <= 1 ? 'disabledT' : 'btnC'}
        onClick={() => setDecrease()}
        disabled={qty <= 1}
      >
        <RemoveIcon />
      </button>
      <span style={{ fontSize: '1.1rem' }}>{qty}</span>
      <button onClick={() => setIncrease()} className='btnC'>
        <AddIcon />
      </button>
    </div>
  );
};

export default CartAmountToggle;

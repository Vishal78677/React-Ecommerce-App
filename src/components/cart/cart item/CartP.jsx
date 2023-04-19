import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleRemoveItem,
  setDecrement,
  setIncrement,
  setToggleCartQty,
} from '../../../reducer/CartSlice';
import { TableBody, TableCell, TableRow } from '@mui/material';
import CartAmountToggle from '../../handleToggle/CartAmountToggle';

const CartP = ({ id, brand, thumbnail, title, price, quantity }) => {
  const dispatch = useDispatch();

  const handleRemovePro = (id) => {
    dispatch(handleRemoveItem(id));
  };

  // const handleInc = (item) => {
  //   dispatch(setIncrement(item));
  // };

  // const handleDec = (item) => {
  //   dispatch(setDecrement(item));
  // };

  const setIncrease = () => {
    dispatch(setIncrement(id));
  };

  const setDecrease = () => {
    dispatch(setDecrement(id));
  };

  // useEffect(() => {
  //   // dispatch(setToggleCartQty());
  // }, [totalPrice]);

  return (
    <>
      <TableBody sx={{ border: 'none' }}>
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell
            component='th'
            scope='row'
            // sx={{
            //   display: 'flex',
            //   alignItems: 'center',
            //   fontSize: '1rem',
            //   gap: '0.3rem',
            // }}
          >
            <img className='imgL' src={thumbnail} alt={title} />
          </TableCell>
          <TableCell align='center'>
            <div className='spanWrapper'>
              <span className='productSpan'>{title}</span>
              <span className='productBrandSpan'>{brand}</span>
            </div>
          </TableCell>
          <TableCell align='right'>${price}</TableCell>
          <TableCell align='right'>
            <CartAmountToggle
              qty={quantity}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
            />
          </TableCell>
          <TableCell align='right'>${price * quantity}</TableCell>
          <TableCell align='right'>
            <div onClick={() => handleRemovePro(id)}>
              <CloseIcon style={{ cursor: 'pointer' }} />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default CartP;

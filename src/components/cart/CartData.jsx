import React from 'react';
import './cartdata.css';
import CartP from './cart item/CartP';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { setCartClear } from '../../reducer/CartSlice';

const CartData = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  // console.log('🚀 ~ file: Cart.jsx:11 ~ Cart ~ cart:', cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(setCartClear());
  };

  return (
    <>
      <div className='cartData'>
        <div className='cartProducts'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Product</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell align='center'>Price</TableCell>
                  <TableCell align='center'>Quantity</TableCell>
                  <TableCell align='center'>Total</TableCell>
                  <TableCell align='center'>Remove</TableCell>
                </TableRow>
              </TableHead>
              {cart?.map((curPro) => {
                const { id, brand, thumbnail, price, title, quantity } = curPro;
                return (
                  <CartP
                    key={id}
                    id={id}
                    // handleInc={handleInc}
                    // handleDec={handleDec}
                    brand={brand}
                    thumbnail={thumbnail}
                    title={title}
                    price={price}
                    quantity={quantity}
                  />
                );
              })}
            </Table>
          </TableContainer>
        </div>
        {
          <div className='cartBtns'>
            <NavLink to={'/products'}>
              <button className='leftBtn btnS'>Continue shopping</button>
            </NavLink>
            <button className='rightBtn btnS' onClick={handleClearCart}>
              {' '}
              Clear cart
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default CartData;

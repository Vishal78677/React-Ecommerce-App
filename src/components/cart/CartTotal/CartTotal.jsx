import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartTotal } from '../../../reducer/CartSlice';
import './carttotal.css';

const CartTotal = () => {
  const { shipping, total_amount, total_item, cart } = useSelector(
    (state) => state.cartSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCartTotal());
  }, [total_item, cart]);

  return (
    <>
      <div className='totalSummary'>
        <h2 className='totalHeading'>Summary</h2>
        <div className='totalDetails'>
          <div className='d-flex top'>
            <span className='spanHeading'>Subtotal</span>{' '}
            <span className='spanPrice'>${total_amount}</span>
          </div>
          <div className='d-flex bottom'>
            <span className='spanHeading'>Shipping</span>{' '}
            <span className='spanPrice'>${shipping}</span>
          </div>
          <hr />
          <div className='totalDetails2'>
            <div className='d-flex totalC '>
              <span className='spanHeading'>Total amount</span>
              <span className='spanPrice'>${shipping + total_amount}</span>
            </div>
            <button className='totalBtn'>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;

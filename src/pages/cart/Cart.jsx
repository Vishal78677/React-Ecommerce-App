import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartData from '../../components/cart/CartData';
import CartTotal from '../../components/cart/CartTotal/CartTotal';
import CustomeBr from '../../components/CustomeBre/CustomeBr';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import './cart.css';
import { setToggleCartQty } from '../../reducer/CartSlice';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToggleCartQty());
  }, [cart]);

  return (
    <>
      <div className='cart'>
        <div className='container cartCon '>
          <div className='cart_br'>
            <CustomeBr name={'Cart'} />
          </div>
          <div className='cartWrapper'>
            {cart?.length > 0 ? (
              <>
                <div className='productsCart'>
                  <CartData />
                </div>
                <div className='productsTotal'>
                  <CartTotal />
                </div>
              </>
            ) : (
              <>
                <div className='emptyCart'>
                  <div className='emptyContent'>
                    <h1 className='emptyH'> Your Cart Is Empty </h1>
                    <ProductionQuantityLimitsIcon className='emptyIcon' />
                  </div>
                  <NavLink to='/products'>
                    <Button variant='contained'>Add Items</Button>
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

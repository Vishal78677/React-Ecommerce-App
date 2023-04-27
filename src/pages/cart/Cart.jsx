import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartData from '../../components/cart/CartData';
import CartTotal from '../../components/cart/CartTotal/CartTotal';
import CustomeBr from '../../components/CustomeBre/CustomeBr';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import './cart.css';
import { setToggleCartQty } from '../../reducer/CartSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddBtn = () => {
    navigate('/products');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
                  <div onClick={handleAddBtn}>
                    <Button variant='contained'>Add Items</Button>
                  </div>
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

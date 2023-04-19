import { Rating, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './singlepage.css';

import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../reducer/Reducer';
import { setCart2 } from '../../reducer/CartSlice';
import Loader from '../../components/Loader/Loader';
import CustomeBr from '../../components/CustomeBre/CustomeBr';
import CartAmountToggle from '../../components/handleToggle/CartAmountToggle';

const SingleProduct = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { singleProduct, loading } = useSelector((state) => state.shopping);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
    window.scroll({ top: '0', behavior: 'smooth' });
  }, [id]);

  const handleAdd = (product) => {
    dispatch(
      setCart2({ ...product, quantity: qty, totalPrice: product.price })
    );
  };

  // console.log(
  //   '🚀 ~ file: SingleProduct.jsx:17 ~ SingleProduct ~ singleProduct:',
  //   singleProduct
  // );

  // const handleQty = (type) => {
  //   if (type === 'inc') {
  //     if (qty < singleProduct[0].stock) {
  //       setQty((preVal) => preVal + 1);
  //       // dispatch(setIncrement);
  //     }
  //   }

  //   if (type === 'dec') {
  //     setQty((preVal) => (qty > 1 ? preVal - 1 : 1));
  //   }
  // };

  const setIncrease = () => {
    if (qty < singleProduct[0].stock) {
      setQty((preVal) => preVal + 1);
    }
  };

  const setDecrease = () => {
    setQty((preVal) => (preVal > 1 ? preVal - 1 : 1));
  };

  return (
    <div className='main_div'>
      <div className='breadCru'>
        <CustomeBr name='products' secondName='product' />
      </div>
      {loading ? (
        <div style={{ height: '500px' }}>
          <Loader />
        </div>
      ) : singleProduct.length ? (
        singleProduct.map((singlePro) => {
          const {
            id,
            thumbnail,
            title,
            rating,
            price,
            discountPercentage,
            description,
            brand,
            images,
          } = singlePro;
          return (
            <div className='singlePro' key={id}>
              <div className='singleProWrapper'>
                <div className='imageWrapper'>
                  <img src={thumbnail} alt='' className='mainImg' />
                  <div className='singleImages'>
                    {images.map((img) => {
                      return <img src={img} alt={title} key={img} />;
                    })}
                  </div>
                </div>

                <div className='singleProDetails'>
                  <h2 className='singleProHeading'> {title} </h2>
                  <Stack spacing={0}>
                    <Rating
                      name='half-rating'
                      defaultValue={rating}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <div className='priceWrapper'>
                    <span style={{ color: '#007aff', fontSize: '1.1rem' }}>
                      ${price}
                    </span>
                    <span style={{ color: 'red' }}>
                      {' '}
                      {discountPercentage}% off{' '}
                    </span>
                  </div>
                  <p className='singleDesc'>{description}</p>
                  <p className='categoryPro'> Brand : {brand} </p>

                  <div className='quantity'>
                    <p className='qtyP'>Quantity :</p>
                    <CartAmountToggle
                      setDecrease={setDecrease}
                      setIncrease={setIncrease}
                      qty={qty}
                    />
                  </div>

                  <NavLink to='/cart' className='navLink'>
                    <button
                      className='addToBtn'
                      onClick={() => handleAdd(singlePro)}
                    >
                      {' '}
                      Add to cart{' '}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 style={{ color: 'black' }}> No Product </h1>
      )}
    </div>
  );
};

export default SingleProduct;

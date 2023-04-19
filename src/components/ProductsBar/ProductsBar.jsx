import React from 'react';
import './productsBar.css';
import ProductCard from './ProductCard';
import laptop from './images/laptop.png';
import oppo from './images/oppo.png';
import perfum from './images/perfum.png';
import shoes from './images/shoes.png';
import watch from './images/watch.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategoryProducts } from '../../reducer/Reducer';

const ProductsBar = () => {
  const items = [
    {
      title: 'Mobile Phone',
      img: oppo,
      cate: 'smartphones',
    },
    {
      title: 'Laptops',
      img: laptop,
      cate: 'laptops',
    },
    {
      title: 'Watches',
      img: watch,
      cate: 'mens-watches',
    },
    {
      title: 'Shoes',
      img: shoes,
      cate: 'mens-shoes',
    },
    {
      title: 'Fragrances',
      img: perfum,
      cate: 'fragrances',
    },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const setProductData = (category) => {
    if (category) {
      // console.log(
      //   '🚀 ~ file: ProductCard.jsx:15 ~ setProductData ~ category:',
      //   category
      // );
      dispatch(fetchCategoryProducts(category));
      navigate('/products');
    }
  };

  return (
    <div className='productsBar'>
      {items &&
        items?.map((item, i) => {
          return (
            <ProductCard
              key={i}
              title={item.title}
              img={item.img}
              cate={item.cate}
              setProductData={setProductData}
            />
          );
        })}
    </div>
  );
};

export default ProductsBar;

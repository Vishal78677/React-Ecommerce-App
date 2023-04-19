import React from 'react';
import FilterSort from '../../components/filterSort/FilterSort';
import Products from '../../components/Products/Products';
import './productspage.css';
import CustomeBr from '../../components/CustomeBre/CustomeBr';
import SortItems from '../../components/SortItem/SortItems';

const ProductsPage = () => {
  return (
    <div className=' wrapper_pro'>
      <div className='container'>
        <div className='customBr' style={{ paddingTop: '4rem' }}>
          <CustomeBr name='products' />
        </div>
        <div className='side_side'>
          <div className='filter_sort'>
            <FilterSort />
          </div>
          <div className='products_filter'>
            <SortItems />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './products.css';
import { FetchAllProducts } from '../../reducer/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import ProductCard2 from './ProductCard2';

const Products = () => {
  const [page, setPage] = useState(1);

  // console.log(
  //   '🚀 ~ file: Products.jsx:12 ~ Products ~ totalPages:',
  //   totalPages
  // );

  const { products, totalPages, loading, ratingProducts } = useSelector(
    (state) => state.shopping
  );

  // console.log(
  //   '🚀 ~ file: Products.jsx:23 ~ Products ~ ratingProducts:',
  //   ratingProducts
  // );

  // console.log(price);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAllProducts(page));
  }, [page]);

  return (
    <>
      <div className='wrapper_content_pro'>
        {loading ? (
          <div style={{ height: '400px' }}>
            <Loader />
          </div>
        ) : ratingProducts.length > 0 ? (
          ratingProducts?.length > 0 ? (
            ratingProducts?.map((curPro) => {
              const { id, title, description, price, thumbnail, rating } =
                curPro;
              const sortDescription = description.slice(0, 55);
              return (
                <ProductCard2
                  key={id}
                  id={id}
                  title={title}
                  price={price}
                  sortDescription={sortDescription}
                  thumbnail={thumbnail}
                  rating={+rating.toFixed(0)}
                />
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20rem',
              }}
            >
              <h1 style={{ fontSize: '1.6rem' }}>No Products Available</h1>
            </div>
          )
        ) : products?.length ? (
          products?.map((curPro) => {
            const { id, title, description, price, thumbnail, rating } = curPro;
            const sortDescription = description.slice(0, 55);
            return (
              <ProductCard2
                key={id}
                id={id}
                title={title}
                price={price}
                sortDescription={sortDescription}
                thumbnail={thumbnail}
                rating={+rating.toFixed(0)}
              />
            );
          })
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20rem',
            }}
          >
            <h1 style={{ fontSize: '1.6rem' }}>No Products Available</h1>
          </div>
        )}
      </div>
      {ratingProducts?.length >= 10 ? (
        ratingProducts?.length >= 10 ? (
          loading ? null : (
            <div className='paginationComp'>
              <Pagination
                totalPages={totalPages}
                page={page}
                setPage={setPage}
              />
            </div>
          )
        ) : null
      ) : products?.length >= 10 ? (
        loading ? null : (
          <div className='paginationComp'>
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
          </div>
        )
      ) : null}
    </>
  );
};

export default Products;

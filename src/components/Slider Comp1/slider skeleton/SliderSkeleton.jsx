import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SliderSkeleton = () => {
  return (
    <>
      <div className='cardS'>
        <SkeletonTheme highlightColor='#f8d1dc'>
          <div>
            <Skeleton height={200} />
          </div>
          <div className='card-detail'>
            <div className='name-price'>
              <Skeleton height={22} />
              <Skeleton />
            </div>
            <button style={{ marginBottom: '49px' }}>
              <Skeleton height={27} />
            </button>
          </div>
        </SkeletonTheme>
      </div>
    </>
  );
};

export default SliderSkeleton;

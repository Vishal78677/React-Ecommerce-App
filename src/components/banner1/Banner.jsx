import React from 'react';

const Banner = ({ img }) => {
  return (
    <>
      <div
        className='banner1'
        style={{
          padding: '1rem 0.5rem',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
        }}
      >
        <div className='bannerWrapper' style={{ width: '100%' }}>
          <img
            src={img}
            alt='banner'
            style={{ width: '100%', height: '40rem' }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

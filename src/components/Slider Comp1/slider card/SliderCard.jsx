import React from 'react';

const SliderCard = ({
  title,
  thumbnail,
  discountPercentage,
  id,
  handleProductPage,
}) => {
  return (
    <>
      <div className='cardS'>
        <div className='card_image'>
          <img src={thumbnail} alt={title} />
        </div>
        <div className='card-detail'>
          <div className='name-price'>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>
              {title}{' '}
            </h3>
            <h3 style={{ fontSize: '0.8rem' }}>
              <span className='getDis'>Up to {discountPercentage}% off </span>{' '}
              <span className='deal'>Deal of the Day</span>{' '}
            </h3>
          </div>

          <button
            onClick={() => handleProductPage(id, 'limited')}
            className='addBtn'
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SliderCard;

import React from 'react';
import './slider2.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useGlobalContext } from '../../ContextApi';
import { NavLink, useNavigate } from 'react-router-dom';

const SliderPro1 = ({ titleP, simplified }) => {
  const { limitData, trendingData } = useGlobalContext();

  const navigate = useNavigate();

  const handleProductPage = (id, type) => {
    if (type === 'limited') {
      navigate(`/product/${id}`);
    } else if (type === 'trending') {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className='slider1'>
      <h3 style={{ color: '#394867', marginBottom: '1.5rem' }}>{titleP}</h3>
      <Swiper
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, Navigation]}
        className='mySwiper'
      >
        {!simplified
          ? limitData.map((curPro) => {
              const { id, title, discountPercentage, thumbnail } = curPro;
              return (
                <SwiperSlide
                  className='shadow-slider'
                  // style={{ maxWidth: '18rem' }}
                  key={id}
                >
                  <div className='cardS'>
                    <div className='card_image'>
                      <img src={thumbnail} alt={title} />
                    </div>
                    <div className='card-detail'>
                      <div className='name-price'>
                        <h3
                          style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}
                        >
                          {title}{' '}
                        </h3>
                        <h3 style={{ fontSize: '0.8rem' }}>
                          <span className='getDis'>
                            Up to {discountPercentage}% off{' '}
                          </span>{' '}
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
                </SwiperSlide>
              );
            })
          : trendingData.map((curPro) => {
              const { id, title, discountPercentage, thumbnail } = curPro;
              return (
                <SwiperSlide
                  className='shadow-slider'
                  // style={{ maxWidth: '18rem' }}
                  key={id}
                >
                  <div className='cardS'>
                    <div className='card_image'>
                      <img src={thumbnail} alt={title} />
                    </div>
                    <div className='card-detail'>
                      <div className='name-price'>
                        <h3
                          style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}
                        >
                          {title}{' '}
                        </h3>
                        <h3 style={{ fontSize: '0.8rem' }}>
                          <span className='getDis'>
                            Up to {discountPercentage}% off{' '}
                          </span>{' '}
                          <span className='deal'>Deal of the Day</span>{' '}
                        </h3>
                      </div>

                      <button
                        onClick={() => handleProductPage(id, 'trending')}
                        className='addBtn'
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default SliderPro1;

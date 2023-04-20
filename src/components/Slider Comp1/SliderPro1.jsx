import React from 'react';
import './slider2.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useGlobalContext } from '../../ContextApi';
import { NavLink, useNavigate } from 'react-router-dom';
import SliderCard from './slider card/SliderCard';
import SliderSkeleton from './slider skeleton/SliderSkeleton';

const SliderPro1 = ({ titleP, simplified }) => {
  const { limitData, trendingData, isLoading } = useGlobalContext();

  const navigate = useNavigate();

  const handleProductPage = (id, type) => {
    if (type === 'limited') {
      navigate(`/product/${id}`);
    } else if (type === 'trending') {
      navigate(`/product/${id}`);
    }
  };

  const skeletonPro = [1, 2, 3, 4, 5];

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
        modules={[
          FreeMode,
          !isLoading && Pagination,
          !isLoading && Autoplay,
          !isLoading && Navigation,
        ]}
        className='mySwiper'
      >
        {!simplified
          ? isLoading
            ? skeletonPro.map((curEle) => {
                return (
                  <SwiperSlide key={curEle} className='shadow-slider'>
                    <SliderSkeleton />
                  </SwiperSlide>
                );
              })
            : limitData.map((curPro) => {
                const { id, title, discountPercentage, thumbnail } = curPro;
                return (
                  <SwiperSlide
                    className='shadow-slider'
                    // style={{ maxWidth: '18rem' }}
                    key={id}
                  >
                    <SliderCard
                      id={id}
                      title={title}
                      discountPercentage={discountPercentage}
                      thumbnail={thumbnail}
                      handleProductPage={handleProductPage}
                    />
                  </SwiperSlide>
                );
              })
          : isLoading
          ? skeletonPro.map((curEle) => {
              return (
                <SwiperSlide key={curEle} className='shadow-slider'>
                  <SliderSkeleton />
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
                  <SliderCard
                    id={id}
                    title={title}
                    discountPercentage={discountPercentage}
                    thumbnail={thumbnail}
                    handleProductPage={handleProductPage}
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default SliderPro1;

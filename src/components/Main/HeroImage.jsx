import React from 'react';
// import { Autoplay, Pagination, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './heroImg.css';

import Slider from 'react-slick';

import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/3.jpg';
import Img4 from '../../images/4.png';
import Img5 from '../../images/5.jpg';

const HeroImage = () => {
  const Images = [Img1, Img2, Img3, Img4, Img5];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className='hero_image'>
      <Slider {...settings}>
        {Images &&
          Images.map((img, index) => {
            return (
              <div key={index} className='img_slider'>
                <img src={img} alt='' />
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default HeroImage;

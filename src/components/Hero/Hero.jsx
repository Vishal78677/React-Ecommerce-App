import React from 'react';
import { NavLink } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className=' wrapper-content '>
          <div className='hero-section-data flex-width text-area '>
            <p className='intro'>Welcome to </p>
            <h1 style={{ color: '#14274E' }}>
              {' '}
              Shop<span className='color-red'>Express</span>
            </h1>
            <p style={{ color: '#394867' }} className='heroDataP'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              corporis iste iure officiis earum, nam tempora quasi non numquam
              debitis. Eligendi aliquid non at sint incidunt iusto neque sequi.
              Aliquam cumque magnam aut, dolore maiores numquam id quibusdam
              debitis? Saepe est inventore placeat mollitia magni illum. Quo
              pariatur deleniti dignissimos?
            </p>
            <NavLink>
              <button className='shop-btn'>show now</button>
            </NavLink>
          </div>
          {/* homepage hero image  */}
          <div className='hero-section-image flex-width'>
            <figure>
              <img
                src='images/hero.jpg'
                alt='hero-section-photo'
                className='img-style'
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from 'react';
import img from './images/card1.jpg';
const ServiceCard = ({ card }) => {
  return (
    <div className='cardC'>
      <div className='cardDetails'>
        <h3 className='cardHeading'>{card.heading}</h3>
        <p className='cardNote'>{card.note}.</p>
      </div>
      <hr className='hrr' />
      <div className='imgWrapper'>
        <img src={card.img} alt='image' />
      </div>
    </div>
  );
};

export default ServiceCard;

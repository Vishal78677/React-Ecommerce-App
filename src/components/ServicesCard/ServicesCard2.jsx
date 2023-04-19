import React from 'react';

import './servicescard.css';

const ServicesCard2 = ({ icon, title, desc }) => {
  return (
    <div className='serviceCard'>
      <div className='icon'>{icon}</div>
      <div className='content'>
        <span>{title} </span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default ServicesCard2;

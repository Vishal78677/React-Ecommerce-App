import React from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Data } from './serviceData';
import './service.css';
import ServicesCard2 from '../ServicesCard/ServicesCard2';

import { BsTruck } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';
import { BsHeadphones } from 'react-icons/bs';

const Services = () => {
  const [data, setData] = useState(Data);

  const cardData = [
    {
      title: 'Free Delivery',
      disc: 'Orders from all item',
      icon: <BsTruck />,
    },
    {
      title: 'Return & Refund',
      disc: 'Money back guarantee',
      icon: <MdAttachMoney />,
    },
    {
      title: 'Member Discount',
      disc: 'On every order over $14.00',
      icon: <TbDiscount2 />,
    },
    {
      title: 'Support 24/7',
      disc: 'Contact us 24 hours a day',
      icon: <BsHeadphones />,
    },
  ];

  return (
    <section className='services'>
      <h2 className='headingS'> Our Services</h2>
      <div className='cardWrapper'>
        {data.map((card) => {
          return <ServiceCard card={card} />;
        })}
      </div>
      <div className='contentCardWrapper'>
        {cardData.map((card, i) => {
          return (
            <ServicesCard2
              key={i}
              title={card.title}
              icon={card.icon}
              desc={card.disc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;

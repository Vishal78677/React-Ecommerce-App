import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './main.css';

const Main = () => {
  const [value, setValue] = React.useState(4);
  return (
    <section className='main'>
      <h1
        style={{ textAlign: 'center', paddingBottom: '1rem', color: 'white' }}
      >
        Today's Discount Products
      </h1>
      <div className='pro-wrapper'>
        <div className='cardd'>
          <div className='card_image'>
            <img src='https://i.dummyjson.com/data/products/2/1.jpg' alt='' />
          </div>
          <div className='card_details'>
            <div className='name-price'>
              <h3 style={{ fontSize: '1.5rem' }}>IPhone X </h3>
              <h3 style={{ fontSize: '1rem' }}>$800</h3>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
              technology A12 Bionic chip with ...
            </p>
            <div className='ratings'>
              <Typography component='legend'>Ratings</Typography>
              <Rating name='read-only' value={value} readOnly />
            </div>
            <button className='addBtn'>Add to Cart</button>
          </div>
        </div>
        <div className='cardd'>
          <div className='card_image'>
            <img src='https://i.dummyjson.com/data/products/2/1.jpg' alt='' />
          </div>
          <div className='card_details'>
            <div className='name-price'>
              <h3 style={{ fontSize: '1.5rem' }}>IPhone X </h3>
              <h3 style={{ fontSize: '1rem' }}>$800</h3>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
              technology A12 Bionic chip with ...
            </p>
            <div className='ratings'>
              <Typography component='legend'>Ratings</Typography>
              <Rating name='read-only' value={value} readOnly />
            </div>
            <button className='addBtn'>Add to Cart</button>
          </div>
        </div>
        <div className='cardd'>
          <div className='card_image'>
            <img src='https://i.dummyjson.com/data/products/2/1.jpg' alt='' />
          </div>
          <div className='card_details'>
            <div className='name-price'>
              <h3 style={{ fontSize: '1.5rem' }}>IPhone X </h3>
              <h3 style={{ fontSize: '1rem' }}>$800</h3>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
              technology A12 Bionic chip with ...
            </p>
            <div className='ratings'>
              <Typography component='legend'>Ratings</Typography>
              <Rating name='read-only' value={value} readOnly />
            </div>
            <button className='addBtn'>Add to Cart</button>
          </div>
        </div>
        <div className='cardd'>
          <div className='card_image'>
            <img src='https://i.dummyjson.com/data/products/2/1.jpg' alt='' />
          </div>
          <div className='card_details'>
            <div className='name-price'>
              <h3 style={{ fontSize: '1.5rem' }}>IPhone X </h3>
              <h3 style={{ fontSize: '1rem' }}>$800</h3>
            </div>
            <p style={{ fontSize: '0.9rem' }}>
              SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED
              technology A12 Bionic chip with ...
            </p>
            <div className='ratings'>
              <Typography component='legend'>Ratings</Typography>
              <Rating name='read-only' value={value} readOnly />
            </div>
            <button className='addBtn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

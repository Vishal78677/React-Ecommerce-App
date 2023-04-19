import React from 'react';
import './newsL.css';
import { Container } from '@mui/material';
import Mail from './images/email.svg';

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <Container maxWidth='xl' className='main_con'>
        <div className='contentL'>
          <span>SALE 20% OFF ALL STORE</span>
          <span>Subscribe our Newsletter</span>
        </div>
        <div className='combineInputBox'>
          <div className='inputHandle'>
            <input type='text' placeholder='Enter Your Email..' />
            <button>Subscribe</button>
          </div>
          <img src={Mail} alt='mailSvg' />
        </div>
      </Container>
    </div>
  );
};

export default NewsLetter;

import React from 'react';
import './about.css';
import AboutBg from '../images/aboutBg.svg';

const About = () => {
  return (
    <>
      <div className='main_c'>
        <div className='container about_page'>
          <h2 className='main-h2' style={{ padding: '0rem 1.5rem' }}>
            About us
          </h2>
          <hr style={{ color: 'gray' }} className='hrL' />
          <div className='contain-about'>
            <div className='left-div'>
              <h2 className='main-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, quis.
              </h2>
              <p style={{ color: 'gray' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                dolor optio! Non atque ipsam veritatis, quidem eveniet tenetur
                dolorem! Similique fuga quo corrupti rem, molestias expedita
                sapiente alias dolorem, recusandae deleniti, ea officia iusto
                ipsam eligendi quam. Facilis, sequi eos?
              </p>
              <p style={{ color: 'gray' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
                eveniet ducimus illo dicta, aut tempore, alias, perferendis
                libero praesentium quidem impedit recusandae autem est sequi.
              </p>
            </div>
            <div className='right-div'>
              <img src={AboutBg} alt='about' className='aboutImg' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from 'react';
import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='setWidth'>
        <div className='footer_area setWidth'>
          <div className='text'>
            <p
              style={{ fontSize: '2rem', color: 'darkblue' }}
              className='titleF'
            >
              ShopExpress.
            </p>
            <div className='privacy'>
              <p>Privacy</p>
              <p>Policy</p>
            </div>
          </div>
          <div className='social-media'>
            <div className='flex-a'>
              <a
                target='_blank'
                href='https://www.facebook.com/vishal.dantani.9250?mibextid=ZbWKwL'
              >
                <FacebookIcon />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/vishal-dantani-574b7b157/'
              >
                <LinkedInIcon />
              </a>
              <a
                target='_blank'
                href='https://twitter.com/Vishal786777?t=1xZKKoTzvtyGN-g9-dv8Mg&s=09'
              >
                <TwitterIcon />
              </a>
              <a
                href='https://instagram.com/vishal_dantani_777?igshid=ZDdkNTZiNTM='
                target='_blank'
              >
                <InstagramIcon />
              </a>
              <a href='#'>
                <YouTubeIcon />
              </a>
            </div>
            <div className='about_footer'>
              <p>Home</p>
              <p>Our Works</p>
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <hr style={{ color: 'black' }} />
        <div className='down'>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

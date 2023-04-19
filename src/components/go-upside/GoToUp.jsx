import React from 'react';

import './gotoup.css';
import { useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useEffect } from 'react';

const GoToUp = () => {
  const [show, setShow] = useState(false);

  const handleListen = () => {
    const scroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // const scroll = window.scrollY; 2916
    // console.log('🚀 ~ file: App.js:20 ~ handleListen ~ scroll:', scroll);
    if (scroll > 340) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleGoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleListen);

    return () => window.removeEventListener('scroll', handleListen);
  });
  return (
    <>
      {show && (
        <span className='iconH' onClick={handleGoTop}>
          <KeyboardDoubleArrowUpIcon style={{ color: 'white' }} />
        </span>
      )}
    </>
  );
};

export default GoToUp;

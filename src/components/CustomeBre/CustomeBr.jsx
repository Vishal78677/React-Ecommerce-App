import React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

const CustomeBr = ({ name, secondName }) => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(url);
  };

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      color='inherit'
      href='/'
      onClick={() => handleClick('/')}
      style={{ color: 'orange' }}
    >
      Home
    </Link>,

    secondName ? (
      <Link
        key='2'
        href='/products'
        onClick={() => handleClick('/products')}
        underline='hover'
        color='text.primary'
        style={{ color: 'orange' }}
      >
        {name}
      </Link>
    ) : (
      <Typography key='2' color='text.primary' style={{ color: 'black' }}>
        {name}
      </Typography>
    ),

    secondName && (
      <Typography key='3' color='text.primary' style={{ color: 'black' }}>
        {' '}
        {secondName}{' '}
      </Typography>
    ),
  ];

  return (
    <>
      <div>
        <h2 style={{ color: 'rgb(243, 102, 131)' }}>ShopExpress</h2>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
          style={{ color: 'black' }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
    </>
  );
};

export default CustomeBr;

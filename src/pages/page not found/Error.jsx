import { Button, Container } from '@mui/material';
import React from 'react';
import './error.css';

const Error = () => {
  return (
    <Container maxWidth='lg'>
      <div className='mainCon'>
        <div className='errorInfo'>
          <h2 style={{ color: 'crimson' }}>404</h2>
          <h4>UH OH! You're lost.</h4>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Button variant='contained'>Back to home</Button>
        </div>
      </div>
    </Container>
  );
};

export default Error;

import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/ServicesC/Services';
import SliderPro1 from '../../components/Slider Comp1/SliderPro1';
import { Container } from '@mui/material';
import ProductsBar from '../../components/ProductsBar/ProductsBar';
import NewsLetter from '../../components/NewsLatter/NewsLetter';

const Home = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Hero />

        <ProductsBar />
        <SliderPro1 titleP="Today's Discount Products" />
        <SliderPro1 simplified titleP='Trending Products' />

        <Services />
      </Container>
      <NewsLetter />
    </>
  );
};

export default Home;

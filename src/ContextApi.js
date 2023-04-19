import { Try } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [limitData, setLimitData] = useState([]);
  // console.log(
  //   '🚀 ~ file: ContextApi.js:12 ~ AppProvider ~ limitData:',
  //   limitData
  // );
  const [trendingData, setTrendingData] = useState([]);

  // console.log(
  //   '🚀 ~ file: ContextApi.js:17 ~ AppProvider ~ trendingData:',
  //   trendingData
  // );

  const getLimitProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=10`);
      setLimitData(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const treadingData = async () => {
    try {
      const res = await axios.get(
        'https://dummyjson.com/products?limit=10&skip=30'
      );

      setTrendingData(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLimitProduct();
    treadingData();
  }, []);

  return (
    <AppContext.Provider value={{ limitData, trendingData }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

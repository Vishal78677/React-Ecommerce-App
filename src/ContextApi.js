import { Try } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [limitData, setLimitData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=10`);
      setLimitData(res.data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const trendingDataF = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        'https://dummyjson.com/products?limit=10&skip=30'
      );

      setTrendingData(res?.data?.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLimitProduct();
    trendingDataF();
  }, []);

  return (
    <AppContext.Provider value={{ limitData, trendingData, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

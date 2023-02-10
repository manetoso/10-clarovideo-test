import { useEffect, useState } from 'react';

import { searchClaroData } from '../services/claro';

// CUSTOM HOOK WITH LOGIC ON FETCHING DATA
export const useFetchClaroData = () => {
  const [claroData, setClaroData] = useState({ response: [], msg: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getClaroData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await searchClaroData();
      setClaroData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getClaroData();
  }, []);

  return {
    isLoading,
    error,
    msg: claroData.msg,
    response: claroData.response,
  };
};

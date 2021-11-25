import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../Config';

const useWeGridFetchNoRandom = url => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation;

  useEffect(() => {
    setPins([]);
  }, [location.pathname]);

  useEffect(() => {
    weGridFetch(url);
  }, [url]);

  const weGridFetch = url => {
    fetch(url, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        if (pinsData.message === 'DOSE_NOT_EXIST_CREATE_BOARD') {
          setPins([]);
        } else {
          setPins(prevPins => {
            if (prevPins === []) {
              return pinsData.message;
            } else {
              return [...prevPins, ...pinsData.message];
            }
          });
        }

        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };
  return { pins, loading, error };
};

export default useWeGridFetchNoRandom;

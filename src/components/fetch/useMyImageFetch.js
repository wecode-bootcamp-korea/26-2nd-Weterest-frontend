import { useState, useEffect } from 'react';
import { API } from '../../Config';

const useMyImageFetch = url => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getImages(url);
  }, [url]);

  const getImages = url => {
    fetch(url, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        if (pinsData.message === 'DOSE_NOT_EXIST_CREATE_BOARD') {
          setPins([]);
        } else {
          setPins(pinsData.message);
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

export default useMyImageFetch;

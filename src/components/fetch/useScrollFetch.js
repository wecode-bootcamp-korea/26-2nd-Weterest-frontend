import { useState, useEffect } from 'react';

const LIMIT = 10;

const useScrollFetch = (url, page) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = `?limit=${LIMIT}&offset=${LIMIT * page}`;

    fetch(url + query)
      .then(res => res.json())
      .then(data => {
        setPins(prevPins => {
          if (prevPins === []) return data.results;
          return [...prevPins, ...data.results];
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [page, url]);

  return { pins, loading, error };
};

export default useScrollFetch;

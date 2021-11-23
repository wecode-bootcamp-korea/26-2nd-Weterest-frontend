import { useState, useEffect } from 'react';

const LIMIT = 10;

const useScrollFetch = (url, page, query) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const pagnation = `?limit=${LIMIT}&offset=${LIMIT * page}`;
    if (query === undefined) query = '';
    fetch(url + pagnation + query)
      .then(res => res.json())
      .then(data => {
        setPins(prevPins => {
          if (prevPins === []) return data.message;
          return [...prevPins, ...data.message];
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [page, url, query]);

  return { pins, loading, error };
};

export default useScrollFetch;

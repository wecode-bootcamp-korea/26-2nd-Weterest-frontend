import { useState, useEffect } from 'react';
import { POST_STYLE_DATA } from '../../styles/StyleData';

const LIMIT = 10;

const useScrollFetch = (url, page) => {
  const [pins, setPins] = useState([]);
  const [pinHeights, setPinHeights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setPins([]);
    setPinHeights([]);
  }, []);

  useEffect(() => {
    const query = `?limit=${LIMIT}&offset=${LIMIT * page}`;
    const calculateHeight = pin => {
      return Math.floor(
        (pin.image_height * POST_STYLE_DATA.POST_WIDTH) / pin.image_width
      );
    };

    fetch(url + query)
      .then(res => res.json())
      .then(data => {
        setPins(prevPins => {
          if (prevPins === []) return data.results;
          return [...prevPins, ...data.results];
        });
        setPinHeights(prevPinHeights => {
          if (prevPinHeights === []) return data.results;
          return [
            ...prevPinHeights,
            ...data.results.map(pin => calculateHeight(pin)),
          ];
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [page, url]);

  return { pins, pinHeights, loading, error };
};

export default useScrollFetch;

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../Config';

const LIMIT = 25;

const setNewHeight = pins => {
  const result = pins.message.map(pin => {
    if (pin.image_width === 1600 && pin.image_height === 900) {
      pin.image_height += addRandomHeight();
    }

    return pin;
  });

  return result;
};

const addRandomHeight = () => {
  const heightList = [100, 300, 600, 1200];
  const randomHeight =
    heightList[Math.floor(Math.random() * heightList.length)];

  return randomHeight;
};

const useScrollFetch = (url, page, query) => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation;

  useEffect(() => {
    setPins([]);
  }, [location.pathname]);

  useEffect(() => {
    getImages(page, url, query);
  }, [page, url, query]);

  const getImages = (page, url, query) => {
    const pagenation = `?limit=${LIMIT}&offset=${LIMIT * page}`;
    const isQuery = query === undefined;

    fetch(url + pagenation + `${isQuery ? '' : query}`, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        setPins(prevPins => {
          if (prevPins === []) {
            return setNewHeight(pinsData);
          } else {
            return [...prevPins, ...setNewHeight(pinsData)];
          }
        });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };
  return { pins, loading, error };
};

export default useScrollFetch;

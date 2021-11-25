import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../Config';

const LIMIT = 10;

const giveRandomHeight = pins => {
  const result = pins.message.map(pin => {
    pin.image_height += randomHeight();
    return pin;
  });

  return result;
};

const randomHeight = () => {
  const heightList = [100, 300, 600, 1200];
  const newHeight = heightList[Math.floor(Math.random() * heightList.length)];

  return newHeight;
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
    infiniteScroll(page, url, query);
  }, [page, url, query]);

  const infiniteScroll = (page, url, query) => {
    const pagenation = `?limit=${LIMIT}&offset=${LIMIT * page}`;
    const isQuery = query === undefined;

    fetch(url + pagenation + `${isQuery ? '' : query}`, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        setPins(prevPins => {
          if (prevPins === []) {
            return giveRandomHeight(pinsData);
          } else {
            return [...prevPins, ...giveRandomHeight(pinsData)];
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

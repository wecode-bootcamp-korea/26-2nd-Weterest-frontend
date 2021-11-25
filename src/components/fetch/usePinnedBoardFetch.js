import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../Config';

const giveRandomHeight = pins => {
  const result = pins.map(pin => {
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

const usePinnedBoardFetch = url => {
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
        setPins(prevPins => {
          if (prevPins === []) {
            return giveRandomHeight(pinsData.pined_boards);
          } else {
            return [...prevPins, ...giveRandomHeight(pinsData.pined_boards)];
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

export default usePinnedBoardFetch;

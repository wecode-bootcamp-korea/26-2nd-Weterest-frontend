import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { API } from '../../Config';

const setNewHeight = pins => {
  const result = pins.map(pin => {
    pin.image_height += addRandomHeight();
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

const usePinnedBoardFetch = url => {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation;

  useEffect(() => {
    setPins([]);
  }, [location.pathname]);

  useEffect(() => {
    getImages(url);
  }, [url]);

  const getImages = url => {
    fetch(url, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(pinsData => {
        if (pinsData.message === 'No Pin') {
          setPins([]);
        } else {
          setPins(setNewHeight(pinsData.pined_boards));
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

export default usePinnedBoardFetch;

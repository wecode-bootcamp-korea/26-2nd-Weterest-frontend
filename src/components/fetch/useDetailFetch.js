import { useState, useEffect } from 'react';
import { API } from '../../Config';

const useDetailFetch = url => {
  const [pinDetailData, setPinDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getDetailData(url);
  }, [url]);

  const getDetailData = url => {
    fetch(url, {
      headers: { Authorization: API.token },
    })
      .then(res => res.json())
      .then(data => {
        setPinDetailData(data.message);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return { pinDetailData, loading, error };
};

export default useDetailFetch;

import React from 'react';
import { useEffect, useState } from 'react';

const UserSearch = (query, pagenumber) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch('/data/main/mainMockUp.json', {
      method: 'GET',
      signal: signal,
    }).then(res => {
      setBooks(prevBook => {
        return [...prevBook, res.data];
      });
    });
  }, [query, pagenumber]);
  return <div>hi</div>;
};

export default UserSearch;

import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import UserSearch from './UserSearch';

const Main = () => {
  const [query, setQuery] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  UserSearch(query, pageNumber);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <MainContainer>
      <input type="text" onChange={handleSearch} />
      <HomeFeed>hi</HomeFeed>
      <div>title</div>
      <div>title</div>
      <div>title</div>
      <div>loading...</div>
      <div>error...</div>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  top: 100px;
  height: 100%;
`;

const HomeFeed = styled.article`
  padding-bottom: 24px;
`;

export default Main;

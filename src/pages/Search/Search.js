import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WeterestGrid from '../../components/Grids/WinterestGrid';
import { API } from '../../Config';

const Search = () => {
  const location = useLocation();
  const query = `&${location.search.slice(1)}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <SearchContainer>
      <SearchFeed>
        <WeterestGrid url={API.main} query={query} />
      </SearchFeed>
    </SearchContainer>
  );
};
const SearchContainer = styled.main`
  position: relative;
  top: 100px;
`;

const SearchFeed = styled.article`
  position: relative;
  padding-bottom: 24px;
`;

export default Search;

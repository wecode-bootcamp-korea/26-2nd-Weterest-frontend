import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WinterestGrid from '../../components/Grids/WinterestGrid';
import { API } from '../../Config';

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <MainContainer>
      <HomeFeed>
        <WinterestGrid url={API.main} />
      </HomeFeed>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  top: 100px;
`;

const HomeFeed = styled.article`
  position: relative;
  padding-bottom: 24px;
`;

export default Main;

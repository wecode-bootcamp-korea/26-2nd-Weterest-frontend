import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import { MockUp } from '../../Config';

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <MainContainer>
      <HomeFeed>
        <WeterestGrid url={MockUp.main} />
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
  background-color: 'red';
`;

export default Main;

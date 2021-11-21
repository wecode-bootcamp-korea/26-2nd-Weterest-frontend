import React from 'react';
import styled from 'styled-components';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import useScrollFetch from '../../components/fetch/useScrollFetch';
import { MockUp } from '../../Config';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const Main = () => {
  const { pins, pinHeights, loading, error } = useScrollFetch(MockUp.main);

  return (
    <>
      <MainContainer>
        <HomeFeed>
          <WeterestGrid pins={pins} pinHeights={pinHeights} />
        </HomeFeed>
      </MainContainer>
      {loading && <div>loading...</div>}
      {error && <div>error!</div>}
    </>
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

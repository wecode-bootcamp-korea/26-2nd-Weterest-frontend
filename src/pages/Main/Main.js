import React from 'react';
import styled from 'styled-components';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import { useState, useEffect } from 'react';

const Main = () => {
  const [pins, setPins] = useState(null);
  const [heights, setHeights] = useState(null);

  const calculateHeight = pin => {
    return Math.floor((pin.height * 252) / pin.width);
  };

  useEffect(() => {
    fetch('/data/main/mainMockUp.json')
      .then(res => res.json())
      .then(data => {
        setPins(data.results);
        setHeights(data.results.map(pin => calculateHeight(pin)));
      });
  }, []);

  return (
    <MainContainer>
      <HomeFeed>
        {pins && heights && <WeterestGrid pins={pins} heights={heights} />}
      </HomeFeed>
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

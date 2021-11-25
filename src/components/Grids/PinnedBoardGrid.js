import React from 'react';
import styled from 'styled-components';
import GridPost from './GridPost/GridPost';
import IntroPost from './GridPost/IntroPost';
import usePinnedBoardFetch from '../fetch/usePinnedBoardFetch';
import FetchInform from '../fetch/FetchInform';

const PinnedBoardGrid = ({ url }) => {
  const { pins, loading, error } = usePinnedBoardFetch(url);
  return (
    <Grid>
      {pins && <GridPost pins={pins} />}
      {pins.length === 0 ? (
        <IntroPost text="흥미로운 사진을 핀해주세요" linkTo="/main" />
      ) : (
        ''
      )}

      {loading && <FetchInform message="그리드 로딩 중" />}
      {error && <FetchInform message="에러" />}
    </Grid>
  );
};

const Grid = styled.div`
  position: relative;
  width: 1260px;
  margin-right: auto;
  margin-left: auto;
`;

export default PinnedBoardGrid;

import React from 'react';
import styled from 'styled-components';
import MyImageGridPost from './GridPost/MyImageGirdPost';
import useMyImageFetch from '../fetch/useMyImageFetch';
import FetchInform from '../fetch/FetchInform';

const MyImageGrid = ({ url }) => {
  const { pins, loading, error } = useMyImageFetch(url);

  return (
    <Grid>
      {pins && <MyImageGridPost pins={pins} />}

      {loading && <FetchInform message="그리드 로딩 중" />}
      {error && <FetchInform message="에러" />}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  position: relative;
  width: 1260px;
  margin-right: auto;
  margin-left: auto;
`;

export default MyImageGrid;

import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import GridPost from './GridPost/GridPost';
import useScrollFetch from '../../components/fetch/useScrollFetch';
import FetchInform from '../../components/fetch/FetchInform';

const WeterestGrid = ({ url }) => {
  const [page, setPage] = useState(0);
  const { pins, loading, error } = useScrollFetch(url, page);
  const gridLoader = useRef(null);
  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (gridLoader.current) observer.observe(gridLoader.current);
  }, [handleObserver]);

  return (
    <>
      <Grid>
        {pins && <GridPost pins={pins} />}
        {loading && <FetchInform message="그리드 로딩 중" />}
        {error && <FetchInform message="에러!" />}
      </Grid>
      <LoaderBox windowHeight={document.body.scrollHeight} ref={gridLoader} />
    </>
  );
};

const LoaderBox = styled.div.attrs(props => ({
  windowHeight: `${
    props.windowHeight === 0 ? window.innerHeight : props.windowHeight
  }px`,
}))`
  position: absolute;
  top: ${props => props.windowHeight};
  width: 20px;
  height: 20px;
`;

const Grid = styled.div`
  position: relative;
  width: 1260px;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default WeterestGrid;

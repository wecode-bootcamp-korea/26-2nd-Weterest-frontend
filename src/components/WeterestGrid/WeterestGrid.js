import React from 'react';
import styled from 'styled-components';
import GridInner from './GridInner';

const WeterestGrid = ({ pins, heights }) => {
  return (
    <Grid>
      {pins && heights && <GridInner pins={pins} heights={heights} />}
    </Grid>
  );
};

const Grid = styled.div`
  position: relative;
  width: 1260px;
  margin-right: auto;
  margin-left: auto;
`;

export default WeterestGrid;

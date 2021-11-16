import React from 'react';
import GridInner from './GridInner';
import styled from 'styled-components';

const WeterestGrid = ({ pins, heights }) => {
  return (
    <div className="WeterestGrid">
      <Grid>
        <GridInner pins={pins} heights={heights} />
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  position: relative;
  width: 1260px;
  margin-right: auto;
  margin-left: auto;
`;
export default WeterestGrid;

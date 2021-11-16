import React from 'react';
import GridPost from './GridPost';

const GridInner = ({ pins, heights }) => {
  return (
    <div className="GridInner">
      {pins && heights && <GridPost pins={pins} heights={heights} />}
    </div>
  );
};

export default GridInner;

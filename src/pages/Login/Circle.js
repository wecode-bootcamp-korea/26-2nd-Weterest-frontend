import React from 'react';
import { ReactComponent as CircleSvg } from './CircleSvg.svg';

const Circle = ({ order, selfOrder, textsColor }) => {
  return <CircleSvg fill={order === selfOrder ? textsColor : 'current'} />;
};

export default Circle;

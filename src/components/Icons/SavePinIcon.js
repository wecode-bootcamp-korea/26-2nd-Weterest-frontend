import React, { useState } from 'react';
import styled from 'styled-components';

const SavePinIcon = () => {
  const [isSave, setIsSave] = useState(false);

  const savePin = () => {
    setIsSave(!isSave);
  };

  return <Save onClick={savePin}>{isSave ? '저장됨' : '저장'}</Save>;
};

export default SavePinIcon;

const Save = styled.div`
  padding: 20px 20px;
  background-color: ${props => props.theme.red};
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.darkRed};
  }
`;

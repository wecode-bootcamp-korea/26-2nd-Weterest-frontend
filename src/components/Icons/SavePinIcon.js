import React, { useState } from 'react';
import styled from 'styled-components';
import { API } from '../../Config';

const SavePinIcon = ({ pinId }) => {
  const [isSave, setIsSave] = useState(false);

  const savePin = e => {
    e.stopPropagation();
    setIsSave(!isSave);

    fetch(API.pin, {
      method: 'POST',
      headers: { Authorization: API.token },
      body: JSON.stringify({
        board_id: pinId,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'CREATE_SUCCESS') alert('핀이 저장되었습니다!');
        if (result.message === 'NO_CONTENTS') alert('핀이 삭제되었습니다!');
      });
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

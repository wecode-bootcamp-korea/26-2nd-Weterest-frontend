import React from 'react';
import styled from 'styled-components';

const FetchInform = ({ message }) => {
  return (
    <MessageBox>
      <div className="message">{message}</div>
    </MessageBox>
  );
};

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 200;

  .message {
    font-size: 2rem;
  }
`;

export default FetchInform;

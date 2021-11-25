import React from 'react';
import styled from 'styled-components';

const FetchInform = ({ message }) => {
  return (
    <MessageBox>
      {message === '에러' ? (
        <div className="message">loading{message}</div>
      ) : (
        <img
          className="loadingGif"
          alt="loading grid"
          src="/images/loading.gif"
        />
      )}
    </MessageBox>
  );
};

const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 200;
  .loadingGif {
    width: 50px;
  }
  .message {
    font-size: 2rem;
  }
`;

export default FetchInform;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IntroPost = ({ text, linkTo }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(linkTo);
  };

  return (
    <Post onClick={navigateTo}>
      <div className="content">
        <div className="circle">+</div>
        <div className="text">{text}</div>
      </div>
    </Post>
  );
};

export default IntroPost;

const Post = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: lightgray 2px solid;
  width: 252px;
  height: 252px;
  padding-top: 30px;
  border-radius: 28px;
  cursor: pointer;

  .content {
    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      padding-bottom: 2px;
      margin: 6px auto 0 auto;
      border-radius: 50%;
      border: lightgray 2px solid;
      font-size: 2rem;
      font-weight: 100;
      color: lightgray;
    }

    .text {
      width: 130px;
      margin-top: 10px;
      font-size: 1.2rem;
      line-height: 1.4;
      text-align: center;
    }
  }
`;

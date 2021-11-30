import React from 'react';
import styled from 'styled-components';
import CommentList from './components/CommentList';
import ProfileSmallCircle from '../../../../components/Profiles/ProfileSmallCircle';

const CommentBox = ({ comments }) => {
  return (
    <Comments>
      <CommentTitle>댓글</CommentTitle>
      <CommentList comments={comments} />
      <CommentAction>
        <ProfileSmallCircle imgUrl="/images/image_a7.jpeg" />
        <CommentInput disabled={true} placeholder="댓글 달기" />
      </CommentAction>
    </Comments>
  );
};

export default CommentBox;

const Comments = styled.div`
  margin-top: 40px;
`;

const CommentTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
`;

const CommentAction = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 10px;
`;

const CommentInput = styled.input`
  padding: 12px 18px;
  border: lightgray 1px solid;
  border-radius: 25px;
  color: gray;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

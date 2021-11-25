import React from 'react';
import styled from 'styled-components';
import UserProfileCircle from './CommentComps/UserProfileCircle';
import DetailCommentList from './CommentComps/DetailCommentList';

const DetailComment = ({ comments }) => {
  return (
    <CommentBox>
      <CommentTitle>댓글</CommentTitle>
      <DetailCommentList comments={comments} />
      <CommentAction>
        <UserProfileCircle imgUrl="/images/image_a7.jpeg" />
        <CommentInput placeholder="Add a comment" />
      </CommentAction>
    </CommentBox>
  );
};

export default DetailComment;

const CommentBox = styled.div`
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

import React from 'react';
import styled from 'styled-components';
import CommentFirstMent from './CommentFirstMent';
import CommentItem from './CommentItem';

const DetailCommentList = () => {
  return (
    <CommentList>{true ? <CommentItem /> : <CommentFirstMent />}</CommentList>
  );
};

export default DetailCommentList;

const CommentList = styled.div`
  margin-top: 10px;
  padding: 12px 0;
`;

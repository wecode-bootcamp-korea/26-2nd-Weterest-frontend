import React from 'react';
import styled from 'styled-components';
import CommentFirstMent from './CommentFirstMent';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <List>
      {comments ? (
        comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))
      ) : (
        <CommentFirstMent />
      )}
    </List>
  );
};

export default CommentList;

const List = styled.div`
  margin-top: 10px;
  padding: 12px 0;
`;

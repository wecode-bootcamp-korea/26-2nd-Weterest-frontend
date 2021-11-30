import React from 'react';
import styled from 'styled-components';
import UserProfileCircle from '../../../../../components/Profiles/ProfileSmallCircle';
import {
  MdThumbUp,
  MdOutlineFavorite,
  MdMoreHoriz,
  MdChatBubble,
} from 'react-icons/md';

const CommentItem = ({ comment }) => {
  return (
    <Comments>
      <UserProfileCircle username={comment.username} imgUrl="" />
      <TextBox>
        <TextBubble>
          <div className="infos">
            <span className="username"> {comment.username} </span>
          </div>
          <div className="text">{comment.description}</div>
        </TextBubble>
        <Icons>
          <span className="WesterIcon favorite">
            <MdOutlineFavorite />
          </span>
          <span className="WesterIcon chatBubble">
            <MdChatBubble />
          </span>
          <span className="WesterIcon more">
            <MdMoreHoriz />
          </span>
          <span className="WesterIcon thumbUp">
            <MdThumbUp />
            <span className="helpful">도움이 되었어요!</span>
          </span>
        </Icons>
      </TextBox>
    </Comments>
  );
};

export default CommentItem;

const Comments = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 10px;
`;

const TextBox = styled.div``;

const TextBubble = styled.div`
  padding: 12px 18px;
  border: lightgray 1px solid;
  border-radius: 25px;
  font-size: 12px;

  .infos {
    .username {
      font-weight: 700;
    }
    .date {
      color: gray;
    }
  }
  .text {
    margin-top: 6px;
    font-weight: 300;
    line-height: 1.4;
  }
`;

const Icons = styled.div`
  display: grid;
  grid-template-columns: 25px 35px 1fr auto;
  padding: 10px 0;
  color: gray;
  font-size: 1.25rem;

  .thumbUp {
    .helpful {
      position: relative;
      top: -5.5px;
      display: inline-block;
      margin-left: 4px;
      font-size: 0.8rem;
    }
  }
`;

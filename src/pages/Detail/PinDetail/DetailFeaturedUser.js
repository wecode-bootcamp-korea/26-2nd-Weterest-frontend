import React from 'react';
import styled from 'styled-components';
import UserProfileCircle from './DetailComment/CommentComps/UserProfileCircle';

const FeaturedUser = ({ username }) => {
  return (
    <UserInfo>
      <div className="userMiniInfo">
        <UserCard>
          <UserProfileCircle username={username} imgUrl="" />
          <UserSum>
            <span className="name">{username}</span>
            <br />
            <span className="folloers">4천 만</span>
          </UserSum>
        </UserCard>
      </div>
      <FollowButton>팔로우</FollowButton>
    </UserInfo>
  );
};

export default FeaturedUser;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserSum = styled.div`
  margin-left: 5px;
  font-size: 0.9rem;
  line-height: 1.2;

  .name {
    font-weight: 700;
  }
`;

const FollowButton = styled.div`
  display: inline-block;
  padding: 15px 40px;
  background-color: black;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  color: white;

  cursor: pointer;
`;

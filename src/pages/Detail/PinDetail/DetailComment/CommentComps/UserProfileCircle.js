import React from 'react';
import styled from 'styled-components';

const UserProfileCircle = ({ imgUrl }) => {
  return (
    <ProfileWrap>
      <UserProfile src={imgUrl} />
    </ProfileWrap>
  );
};

export default UserProfileCircle;

const ProfileWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: purple;
  overflow: hidden;
`;

const UserProfile = styled.img`
  width: 50px;
`;

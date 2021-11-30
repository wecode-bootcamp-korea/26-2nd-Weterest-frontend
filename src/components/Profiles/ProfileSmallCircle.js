import React from 'react';
import styled from 'styled-components';

const ProfileSmallCircle = ({ username, imgUrl }) => {
  return (
    <ProfileWrap pickRandomColor={pickRandomColor(colorList)}>
      {imgUrl ? (
        <UserProfile src={imgUrl} />
      ) : (
        <Username>{username.slice(0, 1)}</Username>
      )}
    </ProfileWrap>
  );
};

export default ProfileSmallCircle;

const colorList = [
  '#66C4FF',
  '#F966FF',
  '#E91C11',
  '#66C4FF',
  '#F966FF',
  '#9E9E9E',
  '#10162F',
  '#008A27',
  '#5533FF',
];

const pickRandomColor = list => {
  return list[Math.floor(Math.random() * list.length)];
};

const Username = styled.div`
  font-size: 2rem;
  margin-top: -0.2rem;
  font-weight: 200;
  color: ${props => props.theme.white};
  opacity: 0.75;
`;

const ProfileWrap = styled.div.attrs(props => ({
  pickRandomColor: props.pickRandomColor,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.pickRandomColor};
  overflow: hidden;
`;

const UserProfile = styled.img`
  width: 50px;
`;

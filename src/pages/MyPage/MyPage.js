import React, { useState, useEffect } from 'react';
import PinnedBoardGrid from '../../components/Grids/PinnedBoardGrid';
import MyImageGrid from '../../components/Grids/MyImageGrid';
import styled from 'styled-components';
import { API } from '../../Config';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch('/data/mypageinfo.json')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);

  return (
    <>
      <MyPageInfo>
        {userInfo && (
          <>
            <ProfileImg src={userInfo.imgurl} alt="profile" />
            <Name>{userInfo.name}</Name>
            <EmailInfo>
              @cckdals222
              <p style={{ marginTop: '10px' }}>
                팔로잉 {userInfo.followNumber}명
              </p>
            </EmailInfo>
            <ButtonBox>
              <GrayButton type="button">공유</GrayButton>
              <GrayButton type="button" right="right">
                프로필 수정
              </GrayButton>
            </ButtonBox>
          </>
        )}
      </MyPageInfo>
      <MyPageGridContainer>
        <GirdTitle>내가 업로드한 이미지</GirdTitle>
        <GirdFeed>
          <MyImageGrid url={API.getMyImage} />
        </GirdFeed>
        <GirdTitle>모든 핀</GirdTitle>
        <GirdFeed>
          <PinnedBoardGrid url={API.getMyPin} />
        </GirdFeed>
      </MyPageGridContainer>
    </>
  );
};

const MyPageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const ProfileImg = styled.img`
  margin-bottom: 10px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  cursor: pointer;
`;

const Name = styled.span`
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: bolder;
`;

const EmailInfo = styled.div`
  color: gray;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const GrayButton = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgb(226, 226, 226);
  }
`;

const MyPageGridContainer = styled.main`
  position: relative;
  top: 60px;
  /* height: 100%; */
  padding-bottom: 20px;
`;

const GirdTitle = styled.div`
  width: 1260px;
  margin: 0 auto 1rem auto;
  font-size: 1.25rem;
  font-weight: 700;
`;

const GirdFeed = styled.article`
  position: relative;
  margin-bottom: 44px;
`;

export default Mypage;

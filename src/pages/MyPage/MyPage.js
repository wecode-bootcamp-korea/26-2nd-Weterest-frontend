import React, { useState, useEffect } from 'react';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import styled from 'styled-components';
import { POST_STYLE_DATA } from '../../styles/StyleData';

const Mypage = () => {
  const [pins, setPins] = useState(null);
  const [heights, setHeights] = useState(null);
  const [userInfo, setUserInfo] = useState({});

  const calculateHeight = pin => {
    return Math.floor((pin.height * POST_STYLE_DATA.POST_WIDTH) / pin.width);
  };

  useEffect(() => {
    fetch('/data/main/mainMockUp.json')
      .then(res => res.json())
      .then(data => {
        setPins(data.results);
        setHeights(data.results.map(pin => calculateHeight(pin)));
      });
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
        <HomeFeed>
          {pins && heights && <WeterestGrid pins={pins} heights={heights} />}
        </HomeFeed>
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
  top: 100px;
  height: 100%;
`;

const HomeFeed = styled.article`
  padding-bottom: 24px;
`;

export default Mypage;

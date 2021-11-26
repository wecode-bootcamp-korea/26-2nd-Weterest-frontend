import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaPlus, FaQuestion } from 'react-icons/fa';
import { MdSearch, MdMessage, MdLogout } from 'react-icons/md';
import styled from 'styled-components';

const buttonStyle = { color: 'grey', width: '24px', height: '24px' };
const edgeButtonStyle = { width: '20px', height: '20px' };

const Nav = () => {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const goToSearchPage = e => {
    if (e.key === 'Enter' && keyword) {
      navigate(`/search?keyword=${keyword}`);
      e.target.value = '';
      window.location.reload(false);
    }
  };

  const goToMainPage = () => {
    navigate(`/main`);
    window.location.reload(false);
  };

  const handleKakaoLogout = () => {
    alert('안전하게 로그아웃 되었습니다.');
    navigate('/');
    localStorage.removeItem('back_token');
  };

  return (
    <Navigator>
      <Icon onClick={goToMainPage}>
        <img alt="윈터레스트 로고" src="/images/favicon.svg" />
      </Icon>
      <Home onClick={goToMainPage}>홈</Home>
      <SearchBoxContainer>
        <MdSearch style={buttonStyle} />
        <Search
          onChange={e => setKeyword(e.target.value)}
          onKeyPress={goToSearchPage}
          type="text"
          placeholder=" 검색"
        />
      </SearchBoxContainer>
      <RightIcon>
        <Icon>
          <FaBell style={buttonStyle} />
        </Icon>
        <Icon>
          <MdMessage style={buttonStyle} />
        </Icon>
        <Myprofile onClick={() => navigate('/mypage')}>
          <ProfileImg alt="myprofile" src="/images/myprofile.jpeg" />
        </Myprofile>
        <Icon onClick={handleKakaoLogout}>
          <MdLogout style={buttonStyle} />
        </Icon>
      </RightIcon>
      <Edge>
        <Upload onClick={() => navigate('/upload')}>
          <FaPlus style={edgeButtonStyle} />
        </Upload>
        <Upload>
          <FaQuestion style={edgeButtonStyle} />
        </Upload>
      </Edge>
    </Navigator>
  );
};

export default Nav;

const Navigator = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 4px 16px;
  background-color: white;
  box-shadow: 0 0 1px lightgrey;
  z-index: 2000;
`;

const Home = styled.button`
  min-width: 60px;
  height: 48px;
  margin-left: 5px;
  border: none;
  border-radius: 24px;
  color: white;
  background-color: black;
  font-family: ${props => props.theme.fontContent};
  font-size: 16px;
  cursor: pointer;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 48px;
  margin: 0 8px;
  padding-left: 16px;
  border-radius: 24px;
  background-color: rgba(225, 225, 225, 0.6);
  :hover {
    background-color: #e2e2e2;
  }
`;

const Search = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 16px;
`;

const RightIcon = styled.div`
  display: flex;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: #e2e2e2;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

const Myprofile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: white;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: #e2e2e2;
  }
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Edge = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: 10px;
  padding: 4px;
  border-radius: 50%;
  box-shadow: 0 0 10px lightgrey;
  cursor: pointer;
  :hover {
    background-color: #e2e2e2;
  }
`;

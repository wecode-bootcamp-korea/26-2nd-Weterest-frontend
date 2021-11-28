import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkTheme } from '../../redux/darkmode';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaPlus, FaQuestion } from 'react-icons/fa';
import { MdSearch, MdLogout, MdWbSunny, MdStarOutline } from 'react-icons/md';
import styled from 'styled-components';

const buttonStyle = { color: 'grey', width: '24px', height: '24px' };
const edgeButtonStyle = { width: '20px', height: '20px' };

const Nav = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const userMockUpInfo = useSelector(state => state.userInfo.userMockUpInfo);
  const isDarkTheme = useSelector(state => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

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

  const toggleDarkMode = () => {
    dispatch(toggleDarkTheme());
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
        <Icon onClick={toggleDarkMode}>
          {isDarkTheme ? (
            <MdWbSunny style={buttonStyle} />
          ) : (
            <MdStarOutline style={buttonStyle} />
          )}
        </Icon>
        <Icon>
          <FaBell style={buttonStyle} />
        </Icon>
        <Myprofile onClick={() => navigate('/mypage')}>
          <ProfileImg alt="myprofile" src={userMockUpInfo.imgUrl} />
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
  background-color: ${props => props.theme.background};
  box-shadow: 0 0 1px ${props => props.theme.borderLine};
  z-index: 2000;
`;

const Home = styled.button`
  min-width: 60px;
  height: 48px;
  margin-left: 5px;
  border: none;
  border-radius: 24px;
  color: ${props => props.theme.fontColorInverted};
  background-color: ${props => props.theme.backgroundInverted};
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
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.searchBar};

  :hover {
    background-color: #e9e9e9;
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
  color: ${props => props.theme.icon};
  box-shadow: ${props => props.theme.shadow};
  cursor: pointer;

  :hover {
    background-color: #e2e2e2;
  }
`;

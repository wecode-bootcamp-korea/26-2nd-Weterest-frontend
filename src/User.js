import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Upload from './pages/Upload/Upload';
import Search from './pages/Search/Search';
import KakaoLogin from './pages/Login/KakaoLogin';

const User = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/users/signin/kakao/callback" element={<KakaoLogin />} />
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/boards/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default User;

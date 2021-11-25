import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REDIRECT_URI } from './OAuth';
import { API } from '../../Config';

const KakaoLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const bodyData = {
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: accessCode,
    };

    const queryStringBody = Object.keys(bodyData)
      .map(key => encodeURIComponent(key) + '=' + encodeURI(bodyData[key]))
      .join('&');

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded ',
        Accept: 'application/json',
      },
      body: queryStringBody,
    })
      .then(response => response.json())
      .then(result => {
        accessToken = result.access_token;
        accessToken &&
          fetch(`${API.baseUrl}/users/signin/kakao`, {
            method: 'POST',
            headers: { Authorization: result.access_token },
          })
            .then(response => response.json())
            .then(backData => {
              if (backData.MESSAGE === 'SUCCESS') {
                localStorage.setItem('back_token', backData.ACCESS_TOKEN);
                navigate('/main');
                alert('로그인에 성공했습니다!');
              } else {
                alert('로그인에 실패했습니다!!!');
              }
            });
      });
  }, [navigate]);

  return <div>여기가 바로 로그인 리다이렉트 페이지입니다</div>;
};

let accessCode = new URL(window.location.href).searchParams.get('code');
let accessToken;

export default KakaoLogin;

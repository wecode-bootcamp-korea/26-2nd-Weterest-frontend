import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';

const LoginContainer = ({
  isLoginModalOpened,
  controlLoginModal,
  isPageScrolledDown,
  changeBodyScroll,
}) => {
  return (
    <Modal
      isLoginModalOpened={isLoginModalOpened}
      isPageScrolledDown={isPageScrolledDown}
    >
      <DeleteButton
        src="/images/xbutton.jpeg"
        alt="deletebutton"
        isPageScrolledDown={isPageScrolledDown}
        onClick={() => {
          controlLoginModal();
          changeBodyScroll();
        }}
      />
      <WinterestLogo alt="윈터레스트 로고" src="/images/favicon.svg" />
      <Welcome>Winterest에 오신 것을 환영합니다</Welcome>
      <Form>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <InputAge placeholder="나이" isPageScrolledDown={isPageScrolledDown} />
        <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
        <LoginButton disabled>로그인</LoginButton>
        <OrText>또는</OrText>
        <FacebookLogin disabled>
          <BsFacebook style={{ fontSize: '17px', marginRight: '10px' }} />
          Facebook으로 계속하기
        </FacebookLogin>
        <LoginLink href={KAKAO_AUTH_URL}>
          <KakaoLogin type="button">Kakao로 계속하기</KakaoLogin>
        </LoginLink>
        <KakaoLogin type="button">로그아웃</KakaoLogin>
      </Form>
      <ServiceInfo>
        계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을
        읽었음을 인정하는 것으로 간주됩니다.
      </ServiceInfo>
    </Modal>
  );
};

export default LoginContainer;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: ${props => (props.isLoginModalOpened ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  padding: 30px 50px 0;
  width: 500px;
  background-color: white;
  border-radius: 20px;
  transform: ${props =>
    props.isPageScrolledDown
      ? 'translate(30%, 450px)'
      : 'translate(-50%, -50%)'};
  z-index: 1000;
`;

const DeleteButton = styled.img`
  display: ${props => (props.isPageScrolledDown ? 'none' : 'inline')};
  position: absolute;
  top: 30px;
  right: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgb(204, 204, 204);
  }
`;

const WinterestLogo = styled.img`
  width: 50px;
  height: 50px;
`;

const Welcome = styled.span`
  margin: 20px 0;
  font-size: 40px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  margin-bottom: 10px;
  padding: 5px 0;
  border: 1px solid rgb(226, 226, 226);
  border-radius: 10px;
  font-size: 20px;
  outline: none;

  &::placeholder {
    padding-left: 10px;
    font-size: 15px;
  }
`;

const InputAge = styled(Input)`
  display: ${props => (props.isPageScrolledDown ? 'block' : 'none')};
`;

const FindPassword = styled.span`
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 250px;
  padding: 7px 0;
  border-radius: 15px;
  border: none;
  background-color: red;
  color: white;
  font-size: 20px;
  outline: none;
  cursor: pointer;
`;

const OrText = styled.span`
  margin: 20px 0;
  text-align: center;
`;

const FacebookLogin = styled(LoginButton)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 10px;
  background-color: blue;
`;

const LoginLink = styled.a``;

const KakaoLogin = styled(LoginButton)`
  margin-bottom: 10px;
  background-color: #fee500;
  color: rgb(24, 22, 0);
`;

const ServiceInfo = styled.span`
  padding: 20px 60px;
  color: rgb(204, 204, 204);
  font-size: 15px;
`;

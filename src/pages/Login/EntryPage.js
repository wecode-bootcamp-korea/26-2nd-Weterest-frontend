import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import LoginModal from './LoginModal';
import LoginIntroduce from './LoginIntroduce';
import ImagesContainer from './ImagesContainer';

const EntryPage = () => {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isPageScrolledDown, setIsPageScrolledDown] = useState(false);
  const [isMouseScrollActive, setIsMouseScrollActive] = useState(false);
  const [bodyScrollOption, setBodyScrollOption] = useState('hidden');
  const [imageMockData, setImageMockData] = useState([]);
  const pageHeaderRef = useRef();
  const pageFooterRef = useRef();

  useEffect(() => {
    fetch('/data/enterimages.json')
      .then(res => res.json())
      .then(data => {
        setImageMockData(data);
      });
  }, []);

  useEffect(() => {
    if (isMouseScrollActive) {
      setTimeout(function () {
        setIsMouseScrollActive(false);
      }, 1000);
    }
  }, [isMouseScrollActive]);

  const controlLoginModal = () => {
    setIsLoginModalOpened(!isLoginModalOpened);
  };

  const changeBodyScroll = () => {
    setBodyScrollOption(isLoginModalOpened ? 'hidden' : 'unset');
    document.body.style.overflow = bodyScrollOption;
  };

  const goToPagePosition = position => {
    position.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const controllPageDirection = () => {
    setIsPageScrolledDown(!isPageScrolledDown);
  };

  const totalScrollEvent = () => {
    setIsMouseScrollActive(!isMouseScrollActive);
    setIsLoginModalOpened(!isLoginModalOpened);
    changeBodyScroll();
    controllPageDirection();
  };

  const wheelGoToPagePosition = e => {
    if (isLoginModalOpened && !isPageScrolledDown) {
      return;
    } else if (isMouseScrollActive) {
      return;
    } else if (!isPageScrolledDown) {
      totalScrollEvent();
      goToPagePosition(pageFooterRef);
    } else if (isPageScrolledDown) {
      totalScrollEvent();
      goToPagePosition(pageHeaderRef);
    }
  };

  return (
    <EntryPageContainer onWheel={wheelGoToPagePosition}>
      <PageShadow
        isLoginModalOpened={isLoginModalOpened}
        isPageScrolledDown={isPageScrolledDown}
      />
      <LoginModal
        isPageScrolledDown={isPageScrolledDown}
        isLoginModalOpened={isLoginModalOpened}
        controlLoginModal={controlLoginModal}
        changeBodyScroll={changeBodyScroll}
      />
      <DownButton
        src="/images/downbutton.png"
        alt="button"
        onClick={() => {
          goToPagePosition(pageFooterRef);
          totalScrollEvent();
        }}
        isPageScrolledDown={isPageScrolledDown}
        isLoginModalOpened={isLoginModalOpened}
      />
      <UpButton
        src="/images/upbutton.png"
        alt="button"
        onClick={() => {
          goToPagePosition(pageHeaderRef);
          totalScrollEvent();
        }}
        isPageScrolledDown={isPageScrolledDown}
        isLoginModalOpened={isLoginModalOpened}
      />
      <WelcomeText isPageScrolledDown={isPageScrolledDown}>
        ???????????? ??? ?????? ????????????
        <p style={{ marginTop: '20px' }}>??? ???????????????</p>
      </WelcomeText>
      <LoginHeader ref={pageHeaderRef}>
        <Logo>
          <WinterestLogo alt="??????????????? ??????" src="/images/favicon.svg" />
          <Pinterest>Winterest</Pinterest>
        </Logo>
        <RigthContainer>
          <Introduces>
            <Introduce>??????</Introduce>
            <Introduce>????????????</Introduce>
            <Introduce>??????</Introduce>
          </Introduces>
          <Forms>
            <LoginButton
              type="button"
              onClick={() => {
                controlLoginModal();
                changeBodyScroll();
              }}
            >
              ?????????
            </LoginButton>
            <SignUpButton disabled={true} type="button">
              ????????????
            </SignUpButton>
          </Forms>
        </RigthContainer>
      </LoginHeader>
      <LoginIntroduce />
      {imageMockData && <ImagesContainer imageMockData={imageMockData} />}
      <PageFooter ref={pageFooterRef} />
    </EntryPageContainer>
  );
};

export default EntryPage;

const flex = css`
  display: flex;
  align-items: center;
`;

const WinterestLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const EntryPageContainer = styled.div``;

const PageShadow = styled.div`
  position: absolute;
  display: ${props => (props.isLoginModalOpened ? 'block' : 'none')};
  width: 100%;
  height: 1607px;
  background-color: black;
  opacity: ${props => (props.isLoginModalOpened ? 0.5 : 0)};
`;

const DownButton = styled.img`
  display: ${props =>
    props.isPageScrolledDown || props.isLoginModalOpened ? 'none' : 'inline'};
  position: absolute;
  right: 50%;
  bottom: 30px;
  width: 50px;
  height: 50px;
  color: ${props => props.theme.white};
  transform: translateX(15px);
  cursor: pointer;
`;

const UpButton = styled(DownButton)`
  display: ${props => (props.isPageScrolledDown ? 'inline' : 'none')};
  bottom: -50px;
`;

const WelcomeText = styled.div`
  display: ${props => (props.isPageScrolledDown ? 'block' : 'none')};
  position: absolute;
  bottom: -200px;
  margin-left: 60px;
  color: white;
  font-size: 60px;
  font-weight: bolder;
`;

const LoginHeader = styled.header`
  ${flex}
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.div`
  ${flex}
`;

const Pinterest = styled.span`
  margin-left: 5px;
  color: ${props => props.theme.red};
  font-weight: bolder;
  font-size: 20px;
`;

const RigthContainer = styled.div`
  display: flex;
`;

const Introduces = styled.div`
  ${flex}
  margin-right: 50px;
  color: ${props => props.theme.fontColor};
`;

const Introduce = styled.span`
  margin-right: 20px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Forms = styled.form`
  ${flex}
`;

const LoginButton = styled.button`
  padding: 5px;
  background-color: ${props => props.theme.red};
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgb(172, 8, 28);
  }
`;

const SignUpButton = styled(LoginButton)`
  margin-left: 20px;
  background-color: rgba(239, 239, 239, 0.5);
  color: lightgray;
  cursor: default;

  &:hover {
    background-color: rgba(239, 239, 239, 0.5);
  }
`;

const PageFooter = styled.div``;

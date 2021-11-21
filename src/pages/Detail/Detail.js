import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PinDetail from './PinDetail/PinDetail';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import { MdKeyboardBackspace } from 'react-icons/md';
import { MockUp } from '../../Config';

const Detail = () => {
  const [pinDetailData, setPinDetailData] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetch(MockUp.detail)
      .then(res => res.json())
      .then(data => {
        setPinDetailData(data.result);
      });
  }, []);

  return (
    <>
      <GoBackIcon onClick={goBack}>
        <MdKeyboardBackspace />
      </GoBackIcon>
      <CloseUp onClick={goBack}>
        {pinDetailData && <PinDetail pin={pinDetailData} />}
      </CloseUp>
      <GridContainer>
        <More>유사한 핀 더보기</More>
        <WeterestGrid url={MockUp.main} />
      </GridContainer>
    </>
  );
};

export default Detail;

const GoBackIcon = styled.div`
  position: fixed;
  left: 20px;
  top: 120px;
  padding: 14px;
  border-radius: 28px;
  background-color: ${props => props.theme.white};
  font-size: 1.8rem;
  box-shadow: ${props => props.theme.shadow};
  z-index: 3;
  cursor: pointer;
`;

const CloseUp = styled.main`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-top: 80px;
  width: 100%;
  padding: 40px 0;
  cursor: zoom-out;
  z-index: 1;
`;

const GridContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const More = styled.div`
  margin-bottom: 40px;
  font-size: 1.25rem;
  font-weight: 700;
`;

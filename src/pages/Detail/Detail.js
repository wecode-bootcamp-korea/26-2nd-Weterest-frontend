import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PinDetail from './PinDetail/PinDetail';
import WeterestGrid from '../../components/Grids/WeterestGrid';
import { MdKeyboardBackspace } from 'react-icons/md';
import { API } from '../../Config';

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
    fetch(API.baseUrl + location.pathname)
      .then(res => res.json())
      .then(data => {
        setPinDetailData(data.message);
      });
  }, [location.pathname]);

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

        {pinDetailData && (
          <WeterestGrid
            url={API.main}
            query={`&tag_id=${pinDetailData.board_info.tag_id}`}
          />
        )}
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
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.icon};
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
  color: ${props => props.theme.fontColor};
  background-color: ${props => props.theme.background};
  cursor: zoom-out;
  z-index: 1;
`;

const GridContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const More = styled.div`
  margin-bottom: 40px;
  color: ${props => props.theme.fontColor};
  font-size: 1.25rem;
  font-weight: 700;
`;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PinDetail from './PinDetail/PinDetail';
import WeterestGrid from '../../components/WeterestGrid/WeterestGrid';
import { MdKeyboardBackspace } from 'react-icons/md';
import { POST_STYLE_DATA } from '../../styles/StyleData';
import { MockUp } from '../../Config';

const Detail = () => {
  const [pinDetailData, setPinDetailData] = useState(null);
  const [pins, setPins] = useState(null);
  const [heights, setHeights] = useState(null);
  const navigate = useNavigate();

  const calculateHeight = pin => {
    return Math.floor((pin.height * POST_STYLE_DATA.POST_WIDTH) / pin.width);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(MockUp.detail)
      .then(res => res.json())
      .then(data => {
        setPinDetailData(data.result);
      });

    fetch('/data/main/mainMockUp.json')
      .then(res => res.json())
      .then(data => {
        setPins(data.results);
        setHeights(data.results.map(pin => calculateHeight(pin)));
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
        <More>More like this</More>
        {pins && heights && <WeterestGrid pins={pins} heights={heights} />}
      </GridContainer>
    </>
  );
};

export default Detail;

const GoBackIcon = styled.div`
  position: fixed;
  left: 30px;
  top: 60px;
  padding: 10px;
  border-radius: 20px;
  background-color: ${props => props.theme.white};
  font-size: 1.2rem;
  box-shadow: ${props => props.theme.shadow};
  z-index: 3;
  cursor: pointer;
`;

const CloseUp = styled.main`
  position: relative;
  display: flex;
  justify-content: space-around;
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

import React from 'react';
import styled from 'styled-components';
import FeaturedUser from './DetailFeaturedUser';
import DetailComment from './DetailComment/DetailComment';
import SavePinIcon from '../../../components/SavePinIcon';
import { MdOutlineIosShare, MdMoreHoriz } from 'react-icons/md';

const PinDetail = ({ pin }) => {
  return (
    <PinCard onClick={e => e.stopPropagation()}>
      <PinWrap>
        <Pin>
          <Image src={pin.board_image_url} />
        </Pin>
      </PinWrap>
      <PinInfoWrap>
        <ActionBar>
          <ActionIcons>
            <span className="WesterIcon more">
              <MdMoreHoriz />
            </span>
            <span className="WesterIcon share">
              <MdOutlineIosShare />
            </span>
          </ActionIcons>
          <SavePinIcon />
        </ActionBar>
        <PinInfo>
          <Source>{pin.source}</Source>
          <Title>{pin.title}</Title>
          <Description>{pin.description}</Description>
          <FeaturedUser profile={pin.profile_image_url} />
          <DetailComment />
        </PinInfo>
      </PinInfoWrap>
    </PinCard>
  );
};

export default PinDetail;

const PinCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;
  width: 1000px;
  padding: 20px;
  border-radius: 32px;
  box-shadow: ${props => props.theme.shadow};
  z-index: 2;
  cursor: default;
`;

const PinWrap = styled.div``;

const Pin = styled.div`
  height: auto;
  border-radius: 32px;
  overflow: hidden;
`;

const PinInfoWrap = styled.div`
  width: 500px;
  padding-top: 18px;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
`;

const ActionBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: sticky;
  top: 0px;
  width: 480px;
  padding-left: 20px;
  border-bottom-right-radius: 30px;
  background-color: white;
  z-index: 4;
`;

const ActionIcons = styled.div`
  padding-left: 12px;
  font-size: 2rem;

  .WesterIcon {
    display: inline-block;
    cursor: pointer;
  }

  span + span::before {
    content: '';
    padding-left: 12px;
    cursor: default;
  }
`;

const PinInfo = styled.div`
  padding: 20px;
`;

const Source = styled.span`
  text-decoration: underline;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-weight: 700;
  font-size: 2rem;
`;

const Description = styled.div`
  margin-top: 28px;
  font-size: 1rem;
  line-height: 1.6;
`;

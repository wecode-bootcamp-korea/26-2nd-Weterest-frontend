import React from 'react';
import styled from 'styled-components';
import FeaturedUser from './Info/FeaturedUser';
import CommentBox from './CommentBox/CommentBox';
import MoreAndShareIcons from '../../../components/Icons/MoreAndShareIcons';
import SavePinIcon from '../../../components/Icons/SavePinIcon';

const PinCard = ({ pin }) => {
  return (
    <Card onClick={e => e.stopPropagation()}>
      <PinWrap>
        <Pin pickRandomHeight={pickRandomHeight(heightList)}>
          <Image src={pin.board_info.board_image_url} />
        </Pin>
      </PinWrap>
      <PinInfoWrap>
        <ActionBar>
          <MoreAndShareIcons />
          <SavePinIcon pinId={pin.board_info.id} />
        </ActionBar>
        <PinInfo>
          <Source>{pin.board_info.source}</Source>
          <Title>{pin.board_info.title}</Title>
          <Description>{pin.board_info.description}</Description>
          <FeaturedUser username={pin.board_info.username} />

          <CommentBox comments={pin.comments} />
        </PinInfo>
      </PinInfoWrap>
    </Card>
  );
};

export default PinCard;

const heightList = [300, 400, 500, 600];

const pickRandomHeight = list => {
  return list[Math.floor(Math.random() * list.length)];
};

const Card = styled.div`
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

const PinWrap = styled.div`
  height: auto;
`;

const Pin = styled.div.attrs(props => ({
  pickRandomHeight: props.pickRandomHeight,
}))`
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  height: ${props => props.pickRandomHeight}px;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

const PinInfoWrap = styled.div`
  position: relative;
  width: 500px;
  padding-top: 18px;
`;
const ActionBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  position: sticky;
  top: 80px;
  width: 480px;
  padding-left: 20px;
  border-bottom-right-radius: 30px;
  background-color: ${props => props.theme.background};
  z-index: 4;
`;

const PinInfo = styled.div`
  padding: 20px;
`;

const Source = styled.span`
  text-decoration: underline;
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Description = styled.div`
  margin-top: 28px;
  font-size: 1rem;
  line-height: 1.6;
`;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MoreAndShareIcons from '../../Icons/MoreAndShareIcons';
import SavePinIcon from '../../Icons/SavePinIcon';
import { POST_STYLE_DATA } from '../../../styles/StyleData';

const GridPost = ({ pins }) => {
  const navigate = useNavigate();

  const goToDetail = pinId => {
    navigate(`/detail/${pinId}`);
  };

  const trimText = text => {
    const maxTextLength = 12;
    if (text.length >= maxTextLength)
      return `${text.slice(0, maxTextLength)}...`;

    return text;
  };
  const calculateHeight = pin => {
    return Math.floor(
      (pin.image_height * POST_STYLE_DATA.POST_WIDTH) / pin.image_width
    );
  };

  const getPinHeights = pins => {
    return pins.map(pin => calculateHeight(pin));
  };

  return (
    <>
      {pins.map((pin, index) => {
        return (
          <Post
            key={pin.id}
            height={calculateHeight(pin)}
            offsetX={(index % 5) * POST_STYLE_DATA.POST_WIDTH}
            offsetY={Offset_y(index, getPinHeights(pins))}
            onClick={() => goToDetail(pin.id)}
          >
            <PostInner>
              <Content>
                <ContentInner>
                  <IconsGroup>
                    <Icons>
                      <SavePinPosition>
                        <SavePinIcon pinId={pin.id} />
                      </SavePinPosition>
                      <MoreAndShareIconsPosition>
                        <MoreAndShareIcons />
                      </MoreAndShareIconsPosition>
                      <Source>{trimText(pin.user)}</Source>
                    </Icons>
                    <IconsOverlay />
                  </IconsGroup>
                  <Image src={pin.image_url} />
                  <ImageSkeleton backgroundColor={pin.image_point_color} />
                </ContentInner>
              </Content>
            </PostInner>
          </Post>
        );
      })}
    </>
  );
};

export default GridPost;

const Offset_y = (currentPinIndex, pinHeights) => {
  const { COLUMN_COUNT, HEIGHT_GAP } = POST_STYLE_DATA;
  const columnIndexOfCurrentPin = currentPinIndex % COLUMN_COUNT;
  let offsetY = 0;

  if (currentPinIndex < COLUMN_COUNT) {
    return offsetY;
  }

  for (
    let pinIndex = 0;
    pinIndex <= currentPinIndex - COLUMN_COUNT;
    pinIndex++
  ) {
    const columnIndex = pinIndex % COLUMN_COUNT;

    if (columnIndexOfCurrentPin === columnIndex) {
      offsetY += pinHeights[pinIndex] + HEIGHT_GAP;
    }
  }

  return offsetY;
};

const Post = styled.div.attrs(props => ({
  height: `${props.height}px`,
  transform: `translateX(${props.offsetX}px) translateY(${props.offsetY}px)`,
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: ${POST_STYLE_DATA.POST_WIDTH}px;
  height: ${props => props.height};
  transform: ${props => props.transform};
`;

const PostInner = styled.div`
  height: 100%;
  padding: 0 8px 16px 8px;
`;

const Icons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const SavePinPosition = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const MoreAndShareIconsPosition = styled.div`
  position: absolute;
  right: 16px;
  bottom: 14px;
  transform-origin: right bottom;
  transform: scale(0.75);
`;

const Source = styled.div`
  position: absolute;
  left: 12px;
  bottom: 14px;
  padding: 14px;
  width: 120px;
  border-radius: 28px;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  font-family: ${props => props.theme.fontContent};
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(235, 235, 235, 1);
  }
`;

const IconsOverlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.black};
  opacity: 0.3;
`;

const IconsGroup = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${IconsGroup} {
    display: block;
  }
`;

const ContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const ImageSkeleton = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor,
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${POST_STYLE_DATA.POST_WIDTH}px;
  height: 100%;
  background-color: ${props => props.backgroundColor};
  border-radius: 20px;
`;

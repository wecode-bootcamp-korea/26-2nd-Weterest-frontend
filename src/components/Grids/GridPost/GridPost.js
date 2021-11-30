import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HoverInfos from './HoverInfos/HoverInfos';
import { POST_STYLE_DATA } from '../../../styles/StyleData';

const GridPost = ({ pins }) => {
  const navigate = useNavigate();

  const goToDetail = pinId => {
    navigate(`/boards/${pinId}`);
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
                  <ContentHover>
                    <HoverInfos pinId={pin.id} title={pin.title} />
                  </ContentHover>
                  <Image src={pin.image_url} />
                  <ImageSkeleton backgroundColor={pin.point_color} />
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

const ContentHover = styled.div`
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

  &:hover ${ContentHover} {
    display: block;
  }
`;

const ContentInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
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

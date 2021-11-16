import React from 'react';
import styled from 'styled-components';
import { POST_STYLE_DATA } from '../../styles/StyleData';

const GridPost = ({ pins, heights }) => {
  return (
    <>
      {pins.map((pin, index) => {
        return (
          <Post
            key={pin.id}
            height={heights[index]}
            offsetX={(index % 5) * POST_STYLE_DATA.POST_WIDTH}
            offsetY={Offset_y(index, heights)}
          >
            <PostInner>
              <Content>
                <ContentInner>
                  <IconsGroup>
                    <Icons>
                      <PinSave>Save</PinSave>
                    </Icons>
                    <IconsOverlay />
                  </IconsGroup>
                  <Image src={pin.image_url} />
                  <ImageSkeleton
                    backgroundColor={pin.color}
                    height={heights[index] - 24}
                  />
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
  color: ${props => props.theme.white};
  z-index: 4;
`;

const PinSave = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  padding: 20px;
  background-color: red;
  border-radius: 30px;
  font-family: 'Noto Sans KR', Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: white;

  &:hover {
    background-color: darkred;
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
  height: 90%;
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
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  z-index: 2;
`;

const ImageSkeleton = styled.div.attrs(props => ({
  height: `${props.height}px`,
  backgroundColor: props.backgroundColor,
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${POST_STYLE_DATA.IconsGroupPOST_WIDTH - 16}px;
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  border-radius: 20px;
`;

const Offset_y = (currentIndex, heights) => {
  const remainder = currentIndex % POST_STYLE_DATA.COLUMN_COUNT;
  let result = 0;

  if (currentIndex < POST_STYLE_DATA.COLUMN_COUNT) {
    return 0;
  }

  for (let i = 0; i <= currentIndex - POST_STYLE_DATA.COLUMN_COUNT; i++) {
    if (i % POST_STYLE_DATA.COLUMN_COUNT === remainder) {
      result = result + heights[i];
    }
  }

  return result;
};

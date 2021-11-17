import React from 'react';
import styled from 'styled-components';

const GridPost = ({ pins, heights }) => {
  return (
    <div className="GridPost">
      {pins.map((pin, index) => {
        const offsetY = currentIndex => {
          const columnCount = 5;
          const remainder = currentIndex % columnCount;
          let result = 0;

          if (currentIndex < columnCount) {
            return 0;
          }

          for (let i = 0; i <= currentIndex - columnCount; i++) {
            if (i % columnCount === remainder) {
              result = result + heights[i];
            }
          }

          return result;
        };

        return (
          <Post
            key={pin.index}
            style={{
              height: `${heights[index]}px`,
              transform: `translateX(${
                (index % 5) * 252
              }px) translateY(${offsetY(index)}px)`,
            }}
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
                  <Image src={pin.board_image_url} alt={pin.source} />
                  <ImageSkeleton
                    style={{
                      backgroundColor: `${pin.image_point_color}`,
                      height: `${heights[index] - 24}px`,
                    }}
                  />
                </ContentInner>
              </Content>
            </PostInner>
          </Post>
        );
      })}
    </div>
  );
};

export default GridPost;

const PostWidth = `252px`;

const Post = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${PostWidth};
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
  padding: 20px 20px 20px 20px;
  background-color: red;
  border-radius: 30px;
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

const ImageSkeleton = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${252 - 16}px;
  height: 100%;
  border-radius: 20px;
`;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HoverInfos from './HoverInfos/HoverInfos';
import { POST_STYLE_DATA } from '../../../styles/StyleData';

const MyImageGirdPost = ({ pins }) => {
  const navigate = useNavigate();

  const goToDetail = pinId => {
    navigate(`/boards/${pinId}`);
  };

  return (
    <>
      {pins.map(pin => {
        return (
          <Post key={pin.id} onClick={() => goToDetail(pin.id)}>
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

export default MyImageGirdPost;

const Post = styled.div`
  position: relative;
  height: 252px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140%;
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

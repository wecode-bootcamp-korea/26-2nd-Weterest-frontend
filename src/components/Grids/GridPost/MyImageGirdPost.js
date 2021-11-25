import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MoreAndShareIcons from '../../Icons/MoreAndShareIcons';
import SavePinIcon from '../../Icons/SavePinIcon';
import { POST_STYLE_DATA } from '../../../styles/StyleData';

const MyImageGirdPost = ({ pins }) => {
  const navigate = useNavigate();

  const goToDetail = pinId => {
    navigate(`/boards/${pinId}`);
  };

  const trimText = text => {
    const maxTextLength = 10;
    if (text.length >= maxTextLength)
      return `${text.slice(0, maxTextLength)}...`;

    return text;
  };

  return (
    <>
      {pins.map(pin => {
        return (
          <Post key={pin.id} onClick={() => goToDetail(pin.id)}>
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
                      <Source>{pin.title && trimText(pin.title)}</Source>
                    </Icons>
                    <IconsOverlay />
                  </IconsGroup>
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

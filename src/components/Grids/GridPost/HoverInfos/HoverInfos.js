import React from 'react';
import styled from 'styled-components';
import MoreAndShareIcons from '../../../Icons/MoreAndShareIcons';
import SavePinIcon from '../../../Icons/SavePinIcon';

const HoverInfos = ({ pinId, title }) => {
  const trimText = text => {
    const maxTextLength = 10;
    if (text.length >= maxTextLength)
      return `${text.slice(0, maxTextLength)}...`;

    return text;
  };

  return (
    <>
      <Icons>
        <SavePinPosition>
          <SavePinIcon pinId={pinId} />
        </SavePinPosition>
        <MoreAndShareIconsPosition>
          <MoreAndShareIcons />
        </MoreAndShareIconsPosition>
        <Source>{title && trimText(title)}</Source>
      </Icons>
      <IconsOverlay />
    </>
  );
};

export default HoverInfos;

const Icons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
`;

const Source = styled.div`
  position: absolute;
  left: 12px;
  bottom: 14px;
  padding: 14px 14px;
  width: 120px;
  border-radius: 28px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};
  font-family: ${props => props.theme.fontContent};
  font-size: 0.8rem;

  &:hover {
    background-color: rgba(235, 235, 235, 1);
  }
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

const IconsOverlay = styled.div`
  height: 100%;

  background-color: ${props => props.theme.black};
  opacity: 0.3;
`;

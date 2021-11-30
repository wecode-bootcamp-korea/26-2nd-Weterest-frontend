import React from 'react';
import styled from 'styled-components';
import { MdOutlineIosShare, MdMoreHoriz } from 'react-icons/md';

const MoreAndShareIcons = () => {
  return (
    <Icons>
      <span className="icon more">
        <MdMoreHoriz />
      </span>
      <span className="icon share">
        <MdOutlineIosShare />
      </span>
    </Icons>
  );
};

export default MoreAndShareIcons;

const Icons = styled.div`
  padding-left: 12px;
  font-size: 2rem;

  .icon {
    display: inline-block;
    padding: 10px;
    border-radius: 50%;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.icon};
    cursor: default;

    &.share {
      margin-left: 5px;
    }

    &:hover {
      background-color: rgba(245, 245, 245, 0.75);
    }
  }
`;

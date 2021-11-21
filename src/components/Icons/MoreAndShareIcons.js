import React from 'react';
import styled from 'styled-components';
import { MdOutlineIosShare, MdMoreHoriz } from 'react-icons/md';

const MoreAndShareIcons = () => {
  return (
    <Icons>
      <span className="WesterIcon more">
        <MdMoreHoriz />
      </span>
      <span className="WesterIcon share">
        <MdOutlineIosShare />
      </span>
    </Icons>
  );
};

export default MoreAndShareIcons;

const Icons = styled.div`
  padding-left: 12px;
  font-size: 2rem;

  .WesterIcon {
    display: inline-block;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.95);

    &.share {
      margin-left: 5px;
    }

    &:hover {
      background-color: rgba(245, 245, 245, 0.75);
    }
  }
`;

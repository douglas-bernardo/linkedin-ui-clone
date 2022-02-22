import styled, { css } from "styled-components";

import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiFillBell, AiFillCaretDown } from "react-icons/ai";
import { FaUserFriends } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';

export const Container = styled.header`
  background: var(--color-white);
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: none;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;

      color: var(--color-icon-unselected);
      cursor: pointer;

      &:hover {
        color: var(--color-black);

        > svg {
          color: var(--color-icon-selected);
        }
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
        color: var(--color-black);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;

  color: var(--color-linkedin);
  background: #fff;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background-image: var(--color-white);
  }
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
  color: var(--color-icon-unselected);

  &.active {
    color: var(--color-icon-selected);
  }
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const MyNetworkIcon = styled(FaUserFriends)`
  ${generalIconCSS}
`;

export const JobsIcon = styled(MdWork)`
  ${generalIconCSS}
`;

export const MessageIcon = styled(BsFillChatDotsFill)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiFillBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CareDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;

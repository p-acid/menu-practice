import React from "react";

import {
  Wrapper,
  MenuWrapper,
  MenuTitle,
  MenuButton,
  MenuButtonIcon,
  MenuItem,
} from "./MenuStyle";
import { MenuProps } from "./MenuTypes";

const Menu: React.FC<MenuProps> = ({ isOpen = false, ...restProps }) => {
  return (
    <Wrapper>
      <MenuButton {...restProps}>
        <MenuButtonIcon className="material-icons" isOpen={isOpen}>
          add_circle
        </MenuButtonIcon>
      </MenuButton>
      {isOpen && (
        <MenuWrapper>
          <MenuTitle>메뉴</MenuTitle>
          <MenuItem isOpen={isOpen}>내 정보</MenuItem>
          <MenuItem isOpen={isOpen}>거래 내역</MenuItem>
          <MenuItem isOpen={isOpen}>이벤트</MenuItem>
          <MenuItem isOpen={isOpen}>로그아웃</MenuItem>
        </MenuWrapper>
      )}
    </Wrapper>
  );
};

export default Menu;

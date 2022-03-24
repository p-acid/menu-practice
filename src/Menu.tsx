import React from "react";

import { MenuWrapper, MenuButton, MenuButtonIcon } from "./MenuStyle";
import { MenuProps } from "./MenuTypes";

const Menu: React.FC<MenuProps> = ({ isOpen = false }) => {
  return (
    <>
      <MenuButton>
        <MenuButtonIcon className="material-icons" isOpen={isOpen}>
          close
        </MenuButtonIcon>
      </MenuButton>
      {isOpen && <MenuWrapper>Menu Wrapper</MenuWrapper>}
    </>
  );
};

export default Menu;

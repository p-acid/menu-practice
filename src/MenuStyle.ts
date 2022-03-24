import styled from "styled-components";

import { MenuProps } from "./MenuTypes";

export const MenuWrapper = styled.div``;

export const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  box-shadow: none;
`;

export const MenuButtonIcon = styled.span<Pick<MenuProps, "isOpen">>`
  font-size: 3rem;
  cursor: pointer;

  ${({ isOpen }) => isOpen && "transform: rotate(180deg);"}
`;

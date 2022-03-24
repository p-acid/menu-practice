import styled, { keyframes } from "styled-components";

import { MenuProps } from "./MenuTypes";

const scaleUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const MenuWrapper = styled.ul`
  position: absolute;
  top: 7rem;
  padding: 30px;
  width: 250px;
  font-size: 1.5rem;
  text-align: center;
  color: #3d3d3d;
  background-color: white;
  border-radius: 8px;
  transform-origin: top center;
  animation: ${scaleUp} 0.5s;

  &::after {
    border-top: 0px solid transparent;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid white;
    content: "";
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MenuTitle = styled.h2`
  margin: 1.5rem 0;
  font-size: 2rem;
  color: #3d3d3d;
`;

export const MenuItem = styled.li<Pick<MenuProps, "isOpen">>`
  padding: 1rem 0;
  list-style: none;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  box-shadow: none;
`;

export const MenuButtonIcon = styled.span<Pick<MenuProps, "isOpen">>`
  font-size: 5rem;
  color: #e8e8e8;
  cursor: pointer;
  transition: 0.3s;
  ${({ isOpen }) => isOpen && "transform: rotate(45deg);"}
`;

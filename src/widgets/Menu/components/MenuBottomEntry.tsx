import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import {  MENU_BOTTOM_ENTRY_HEIGHT} from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  inSpirit?: string;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabelBottom = styled.div<{ isPushed: boolean; inSpirit: string }>`
  color: ${({ isPushed, theme, inSpirit }) =>
    (!isPushed && "transparent") || (inSpirit === "noInSpirit" && theme.colors.textSubtle) || "#35b9c0"};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuBottomEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
align-items: flex-start;
  height: ${ MENU_BOTTOM_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "18px 16px" : "18px 16px")};
  font-size: 15px; // ${({ secondary }) => (secondary ? "14px" : "16px")};
  font-weight: bold;
  background-color: transparent; // ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 0px 0px 10px ${theme.colors.primary}` : "none")};
  cursor: pointer;
  align-self: flex-start;
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ theme, inSpirit }) =>
      inSpirit === "noInSpirit" ? theme.colors.tertiary : "rgba(96, 213, 220, 0.15)"};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuBottomEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelBottomMemo = React.memo(LinkLabelBottom, (prev, next) => prev.isPushed === next.isPushed);

export { MenuBottomEntry, LinkLabelBottomMemo as LinkBottomLabel };

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText, ChevronLeft, ChevronRight, HamburgerCloseIcon, HamburgerIcon } from "../icons";
import MenuButton from "./MenuButton";
import { useMatchBreakpoints } from "../../../hooks";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 55px;
    height: 75px;
    //margin-left: 30px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      /* display: block; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledMenuButton = styled(MenuButton)`
  position: absolute;
  left: ${({ isMobile, isPushed }) => {
    switch (isMobile) {
      case true:
        return "20px";
      case false:
        return isPushed ? "240.2px" : "56.2px";
      default:
        break;
    }
    return "";
  }};
  top: ${({ isMobile }) => {
    switch (isMobile) {
      case true:
        return "10px";
      case false:
        return "320px";
      default:
        break;
    }
    return "";
  }};
  padding: ${({ isMobile }) => {
    switch (isMobile) {
      case true:
        return 0;
      case false:
        return "50px 5px";
      default:
        break;
    }
    return "";
  }};
  border-right: 1px solid #42d785;
  border-top: 1px solid #42d785;
  border-bottom: 1px solid #42d785;
  background-image: none;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: ${({ isMobile }) => (isMobile ? "none" : "")};
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoWithText className="desktop-icon" isDark={isDark} isPushed={isPushed} />
    </>
  );

  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

  return !isMobile ? (
    <Flex>
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px" isMobile={isMobile} isPushed={isPushed}>
        {isPushed ? <ChevronLeft width="24px" color="textSubtle" /> : <ChevronRight width="24px" color="textSubtle" />}
      </StyledMenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  ) : (
    <Flex>
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px" isMobile={isMobile} isPushed={isPushed}>
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </StyledMenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);

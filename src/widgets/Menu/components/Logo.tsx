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
  margin-top: -8px;
  transition: 0.2s;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 55px;
    height: auto;
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
        return isPushed ? "248px" : "84px";
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
        return "79px";
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
        return 0;
      default:
        break;
    }
    return "";
  }};
  width: 31px;
  border-right: 1px solid rgb(55, 65, 81);
  border-top: 1px solid rgb(55, 65, 81);
  border-bottom: 1px solid rgb(55, 65, 81);
  border: ${({ isMobile }) => (isMobile ? "none" : "")};
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background: transparent;
`;

const StyledContainer = styled(Flex)<{ isPushed: boolean }>`
  position: fixed;
  top: 0;
  z-index: 20;
  padding-left: ${({ isPushed }) => (isPushed ? "8px" : "0")};
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

  const renderNotMobile = () => (
    <>
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
    </>
  );

  const renderMobile = () => (
    <>
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
    </>
  );

  return <StyledContainer isPushed={isPushed}>{!isMobile ? renderNotMobile() : renderMobile()}</StyledContainer>;
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);

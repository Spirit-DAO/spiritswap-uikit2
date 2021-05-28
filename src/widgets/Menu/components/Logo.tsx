import React,{useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText, ChevronLeft, ChevronRight, HamburgerCloseIcon, HamburgerIcon } from "../icons";
import MenuButton from "./MenuButton";
import { useMatchBreakpoints } from "../../../hooks";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  showMenu: boolean;
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
    margin-left: 30px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      /* display: block; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, showMenu }) => {
  const isAbsoluteUrl = href.startsWith("http");


  useEffect(() => {
    console.log("TEST NO TE RENDERICES MUCHO")
  }, [showMenu])

  const innerLogo = (
    <>
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

  const StyledMenuButton = styled(MenuButton)`
    position: absolute;
    left: ${() => {
      switch (isMobile) {
        case true:
          return "20px";
          break;
        case false:
          return isPushed ? "240.2px" : "56.2px";
          break;
        default:
          break;
      }
      return "";
    }};
    top: ${() => {
      switch (isMobile) {
        case true:
          return "10px";
          break;
        case false:
          return showMenu ? "320px" : "383px";
          break;
        default:
          break;
      }
      return "";
    }};
    padding: ${() => {
      switch (isMobile) {
        case true:
          return 0;
          break;
        case false:
          return "50px 5px";
          break;
        default:
          break;
      }
      return "";
    }};
    border-right: 3px solid #42d785;
    border-top: 3px solid #42d785;
    border-bottom: 3px solid #42d785;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    background-image: none;
    border: ${() => (isMobile ? "none" : "")};
  `;

  return !isMobile ? (
    <Flex>
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
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
      <StyledMenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
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

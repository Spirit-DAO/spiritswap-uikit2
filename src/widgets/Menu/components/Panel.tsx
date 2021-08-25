import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import AuditBadge from "./AuditBadge";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; isMobile: boolean }>`
  position: fixed;
  padding-top: "80px";
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(to top, #151e31 40%, #1F2B46 80%)"
      : "linear-gradient(to top, #E6FDFF 40%, #FFFFFF 80%)"};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  /* border-right: ${({ isPushed }) => (isPushed ? "2px solid #42d785" : "2px solid #42d785")};
  border-right: ${({ isMobile }) => (isMobile ? "2px solid #42d785" : "none")}; */
  border-right: ${({ isMobile, isPushed }) => {
    switch (isMobile) {
      case true:
        return isPushed ? "2px solid #42d785" : "none";
        break;
      case false:
        return isPushed ? "2px solid #42d785" : "2px solid #42d785";
        break;
      default:
        break;
    }
    return "";
  }};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-width: 1px;
    border-image: linear-gradient(to top, #42d785, rgba(0, 0, 0, 0)) 0% 100%;
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, isMobile } = props;
  return (
    <StyledPanel isMobile={isMobile} isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
      <AuditBadge isPushed={isPushed} />
    </StyledPanel>
  );
};

export default Panel;

// const Panel: React.FC<Props> = (props) => {
//   const { isPushed, showMenu } = props;

//   const { isXl } = useMatchBreakpoints();
//   const isMobile = isXl === false;

//   const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
//     position: fixed;
//     //padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
//     padding-top: ${({ showMenu }) => (showMenu ? "80px" : "80px")};
//     top: 0;
//     left: 0;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     flex-shrink: 0;

//     width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
//     height: 100vh;
//     transition: padding-top 0.2s, width 0.2s;
//     //border-right: 2px solid #42d785;

//     z-index: 11;
//     overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
//     transform: translate3d(0, 0, 0);

//   `;

//   return (
//     <StyledPanel isPushed={isPushed} showMenu={showMenu}>
//       <PanelBody {...props} />
//       <PanelFooter {...props} />
//     </StyledPanel>
//   );
// };

// export default Panel;

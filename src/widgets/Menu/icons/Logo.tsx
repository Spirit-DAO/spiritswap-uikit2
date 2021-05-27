import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;
const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;
const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: red;
  & > div {
    width: 60px;
    height: 120%;
    background: blue;
    & > img {
      align-items: center;
      height: 150%;
    }
  }
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <IconContainer>
      <div>
        <img {...props} src="/images/spiritswap_logo.png" alt="" width="80" height="116" />
      </div>
      <span style={{ color: "#52D784", letterSpacing: "3px" }}>
        Spirit<span style={{ color: "#60D5DC" }}>Swap</span>
      </span>
    </IconContainer>
  );
};

export default Logo;

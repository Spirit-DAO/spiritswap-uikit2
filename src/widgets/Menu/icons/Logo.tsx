import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";

interface LogoProps extends SvgProps {
  isDark: boolean;
  isPushed: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
const Logo: React.FC<LogoProps> = ({ isDark, isPushed }) => {
  //   const Text = styled.text`
  //   font-size: 26.26px;
  //   font-family: GoodTimingRg-Bold, Good Timing !important;
  //   font-weight: 700;
  // `;
  // const Tspan = styled.tspan`
  //   font-size: 26.26px;
  //   font-family: GoodTimingRg-Bold, Good Timing !important;
  //   font-weight: 700;
  //   letter-spacing: 0em;
  // `;
  const IconContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  const ImageLogo = styled.img`
    width: 55px;
    height: 75px;
    margin-left: ${() => (isPushed ? "0" : "30px")};
    transition: 0.2s;
  `;

  return (
    <IconContainer>
      <ImageLogo src="/images/spiritswap_logo.png" alt="" />
      {isPushed ? (
        <span className="desktop-icon" style={{ color: "#52D784", letterSpacing: "3px", marginLeft:"30px" }}>
          Spirit
          <span style={{ color: "#60D5DC" }}>Swap</span>
        </span>
      ) : (
        <></>
      )}
    </IconContainer>
  );
};

export default Logo;

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <rect width="512" height="512" fill="#2F51FA" />
      <circle cx="256" cy="256" r="179" fill="white" />
      <rect x="198" y="198" width="116" height="116" rx="12" fill="#3053FA" />
    </Svg>
  );
};

export default Icon;

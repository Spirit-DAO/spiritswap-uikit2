import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img {...props} width="220px" height="50px" src="/images/mobile-logo.png" />;
};

export default Icon;

import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";


const Icon: React.FC<SvgProps> = (props) => {
  return <img {...props} width="24px" height="24px" src="/images/price-token.png" />;
};

export default Icon;

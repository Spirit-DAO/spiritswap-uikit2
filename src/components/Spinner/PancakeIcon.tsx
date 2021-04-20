import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <path d="M103,31.17V31c0-11.63-8.41-22.27-21-22.27-10,0-15.87,7.22-17.86,14h0c-2-6.76-7.81-14-17.86-14-12.64,0-21,10.64-21,22.27v.18c-.07,2.53,0,28.27,38.9,49.26h0C103,59.44,103.06,33.7,103,31.17Z" transform="translate(-25.17 -8.72)" fill="#d56799"/>
    </Svg>
  );
};

export default Icon;
import React from "react";
import Svg, { SvgIcon } from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" {...props}>
      <g strokeLinecap="round" strokeWidth={1.5} stroke="#35B9C0" fill="none" strokeLinejoin="round">
        <path d="M21 9H3V7l9-4 9 4ZM4.5 15.5v-4M19.5 11.5v4M9.5 11.5v4M14.5 11.5v4M3 18h18v3H3Z" />
      </g>
      <path fill="none" d="M0 0h24v24H0Z" />
    </SvgIcon>
  );
};

export default Icon;

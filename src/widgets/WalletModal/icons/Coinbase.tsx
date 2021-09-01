import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <circle fill="white" cx="512" cy="512" r="512" />
      <path
        d="M559.2,672c26.2,0,52.4-5.8,75.6-14.5l49.4,75.6c-43.6,23.3-90.2,34.9-139.6,34.9
		c-148.3,0-258.9-98.9-258.9-256c2.9-157.1,116.4-256,261.8-256c52.4,0,90.2,11.6,130.9,32l-46.5,78.5
		c-23.3-8.7-49.4-14.5-75.6-14.5c-87.3,0-157.1,55.3-157.1,160C399.2,610.9,466.1,672,559.2,672z"
        fill="#1652F0"
      />
    </Svg>
  );
};

export default Icon;

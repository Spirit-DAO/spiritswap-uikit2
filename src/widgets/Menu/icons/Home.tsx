import React from "react";
import Svg ,{SvgIcon} from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 8.6001V21.0001H20V8.6001" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 10L12 3L22 10" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 21V15C15 13.895 14.105 13 13 13H11C9.895 13 9 13.895 9 15V21" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>

  );
};

export default Icon;

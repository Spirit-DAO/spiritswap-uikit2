import React from "react";
import Svg , {SvgIcon} from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 21H5C3.895 21 3 20.105 3 19V3" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 6L16.402 11.518C16.156 11.813 15.764 11.941 15.391 11.848L12.609 11.152C12.237 11.059 11.844 11.187 11.598 11.482L7 17" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </SvgIcon>
    
  );
};

export default Icon;

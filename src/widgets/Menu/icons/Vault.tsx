import React from "react";
import Svg , {SvgIcon} from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16 17.3721V22.0001L18 21.0001L20 22.0001V17.3721" stroke="#7BD784" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18 18C19.933 18 21.5 16.433 21.5 14.5C21.5 12.567 19.933 11 18 11C16.067 11 14.5 12.567 14.5 14.5C14.5 16.433 16.067 18 18 18Z" stroke="#7BD784" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13 21H5C3.895 21 3 20.105 3 19V5C3 3.895 3.895 3 5 3H18C19.105 3 20 3.895 20 5V8" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 7H16" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 11H11" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 15H10" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>



  );
};

export default Icon;

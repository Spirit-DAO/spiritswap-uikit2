import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26px" height="26px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="13" cy="13" r="12" stroke="#35b9c0" strokeWidth="2" strokeLinejoin="round" fill="none" />
      <path
        d="M20 13C20 12.0807 19.8189 11.1705 19.4672 10.3212C19.1154 9.47194 18.5998 8.70026 17.9497 8.05025C17.2997 7.40024 16.5281 6.88463 15.6788 6.53284C14.8295 6.18106 13.9193 6 13 6C12.0807 6 11.1705 6.18106 10.3212 6.53284C9.47194 6.88463 8.70026 7.40024 8.05025 8.05025C7.40024 8.70026 6.88463 9.47194 6.53284 10.3212C6.18106 11.1705 6 12.0807 6 13"
        stroke="#35b9c0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M13 10L13 14" stroke="#35b9c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13" cy="17" r="3" fill="#35b9c0" />{" "}
    </Svg>
  );
};

export default Icon;

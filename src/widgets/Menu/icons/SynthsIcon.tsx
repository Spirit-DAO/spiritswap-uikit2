import React from "react";
import Svg, { SvgIcon } from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      xmlSpace="preserve"
      {...props}
    >
      <g fill="none">
        <g
          stroke="#35B9C0"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1.5 11.25 3 9.75l1.5 1.5M22.5 12.75l-1.5 1.5-1.5-1.5" />
          <path d="M4.678 6.79C6.31 4.501 8.975 3 12 3a9 9 0 0 1 9 9 9.04 9.04 0 0 1-.227 1.988" />
          <path d="M19.322 6.79C17.02 7.564 14.563 8 12 8s-5.02-.436-7.322-1.21M19.318 17.206c-1.631 2.289-4.296 3.79-7.322 3.79a9 9 0 0 1-9-9c0-.684.083-1.348.227-1.988" />
          <path d="M4.675 17.206c2.302-.774 4.759-1.21 7.322-1.21s5.02.436 7.322 1.21" />
          <ellipse cx={12} cy={12} rx={3.75} ry={9} />
        </g>
        <path d="M0 0h24v24H0z" />
      </g>
    </SvgIcon>
  )
}



export default Icon;   
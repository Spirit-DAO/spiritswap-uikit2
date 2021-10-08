/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <OpenNewIcon color="#6DD784" ml="4px" />
    </Link>
  );
};

export default LinkExternal;

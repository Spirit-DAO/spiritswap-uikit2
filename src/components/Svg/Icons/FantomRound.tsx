import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img {...props} width="24px" height="24px" src="/images/tokens/FTM.png" />;
};

export default Icon;

import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 1000" {...props}>
      <path d="M 300 192C 353 192 404 213 441 250C 500 317 500 317 559 250C 596 213 647 192 700 192C 753 192 804 213 841 250C 879 288 900 339 900 392C 900 443 880 492 845 529C 845 529 845 530 845 530C 845 530 550 846 550 846C 512 881 487 881 450 846C 450 846 159 533 159 533C 121 495 100 445 100 392C 100 339 121 288 159 250C 196 213 247 192 300 192C 300 192 300 192 300 192" />
    </Svg>
  );
};

export default Icon;

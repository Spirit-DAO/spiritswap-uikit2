import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="47" height="47" color="#6DD784" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path d=" M 638 138C 664 138 682 164 673 188C 673 188 617 338 617 338C 617 338 663 338 663 338C 692 338 710 370 695 395C 695 395 420 845 420 845C 410 860 391 866 375 860C 358 854 348 837 350 819C 350 819 394 538 394 538C 394 538 338 538 338 538C 313 538 296 515 301 492C 301 492 376 167 376 167C 380 150 395 138 413 138C 413 138 638 138 638 138" />
    </Svg>
  );
};

export default Icon;

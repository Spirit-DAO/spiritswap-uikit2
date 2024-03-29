import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  const { colorFill } = props;
  return (
    <Svg viewBox="0 0 56 56" {...props}>
      <path
        d="M28 0C12.5359 0 0 12.5359 0 28C0 43.4641 12.5359 56 28 56C43.4641 56 56 43.4641 56 28C56 12.5359 43.4641 0 28 0Z"
        fill={!colorFill ? "#40B3E0" : colorFill}
      />
      <path
        d="M41.6244 16.1065L36.6231 41.3216C36.6231 41.3216 35.9238 43.0703 34.0003 42.231L22.4595 33.383L18.263 31.3547L11.1987 28.9765C11.1987 28.9765 10.1146 28.5919 10.0096 27.7526C9.90457 26.9132 11.2337 26.4586 11.2337 26.4586L39.3159 15.4424C39.3159 15.4424 41.6242 14.4283 41.6242 16.107"
        fill={!colorFill ? "white" : "#0D0E21"}
      />
      <path
        d="M21.5727 41.0382C21.5727 41.0382 21.2359 41.0067 20.8159 39.6776C20.3965 38.3487 18.2631 31.3543 18.2631 31.3543L35.2245 20.5831C35.2245 20.5831 36.2038 19.9885 36.1688 20.5831C36.1688 20.5831 36.3436 20.6881 35.8188 21.1777C35.2945 21.6674 22.4948 33.173 22.4948 33.173"
        fill={!colorFill ? "#D2E5F1" : "#0D0E21"}
      />
      <path
        d="M26.8847 36.7751L22.32 40.9371C22.32 40.9371 21.963 41.2079 21.5728 41.0381L22.4469 33.3075"
        fill={!colorFill ? "#B5CFE4" : "#0D0E21"}
      />
    </Svg>
  );
};

export default Icon;

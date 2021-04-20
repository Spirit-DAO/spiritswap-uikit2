import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 40px;
  animation: ${float} 3s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  position: absolute;
  top: 40px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
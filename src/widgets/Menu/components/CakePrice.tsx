import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.span`
  display: flex;
  /* width: 100%; */
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return (
    <PriceLink>
      <PancakeRoundIcon width="24px" mr="8px" />
      {cakePriceUsd ? (
        <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
      ) : (
        <Skeleton width={80} height={24} />
      )}
    </PriceLink>
  );
};

export default React.memo(CakePrice);

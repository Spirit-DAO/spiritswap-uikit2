import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, FantomRoundIcon } from "../../../components/Svg";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { Link } from "../../../components/Link";

export enum Token {
  SPIRIT = 'SPIRIT',
  FTM = 'FTM'
};

interface Props {
  token?: Token;
  cakePriceUsd?: number;
}

const PriceLink = styled.span`
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.3s;
  }
`;

const CakePrice: React.FC<Props> = ({ token = Token.SPIRIT, cakePriceUsd }) => {
  const renderIcon = () => {
    const styles = {
      width: "24px",
      mr: "8px"
    };
    switch(token) {
      case Token.SPIRIT: 
        return <PancakeRoundIcon {...styles} />;
      case Token.FTM:
        return <FantomRoundIcon {...styles} />;
      default:
        return null;
    }
  };

  const getPriceLink = () => {
    const base = "https://coinmarketcap.com/currencies";
    switch(token) {
      case Token.SPIRIT: 
        return `${base}/spiritswap/`;
      case Token.FTM:
        return `${base}/fantom/`;
      default:
        return base;
    }
  };

  return cakePriceUsd ? (
    <PriceLink>
      {renderIcon()}
      <Link
        href={getPriceLink()}
        style={{ marginLeft: "5px", textDecoration: "none" }}
        target="_blank"
        color="textSubtle"
        bold
      >{`$${cakePriceUsd.toFixed(3)}`}</Link>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);

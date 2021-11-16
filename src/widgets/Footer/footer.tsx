import React from "react";
import {
  Wrapper,
  Body,
  SocialColum,
  Colums,
  Title,
  StyledLink,
  Info,
  InfoItems,
  LinksColum,
  Copyright,
} from "./styles";

import SocialLinks from "./SocialLinks";
const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Body>
        <SocialColum>
          <SocialLinks/>
          <Info>
            <InfoItems>Analytics</InfoItems>
            <InfoItems>Docs</InfoItems>
            <InfoItems>About Us</InfoItems>
          </Info>

          <Copyright>© 2021 SpiritSwap</Copyright>
        </SocialColum>

        <LinksColum>
          <Colums>
            <Title>Spirit DEX</Title>
            <StyledLink href="https://defillama.com/protocol/spiritswap">Defi Llama</StyledLink>
            <StyledLink href="https://www.coingecko.com/en/exchanges/spiritswap">Coingecko</StyledLink>
            <StyledLink href="https://coinmarketcap.com/exchanges/spiritswap/">CoinMarketCap</StyledLink>
          </Colums>

          <Colums>
            <Title>Exchanges</Title>
            <StyledLink href="https://www.gate.io/trade/SPIRIT_USDT">Gate.io</StyledLink>
            <StyledLink href="https://www.mexc.com/exchange/SPIRIT_USDT">MEXC</StyledLink>
            <StyledLink href="https://www.hotbit.io/exchange?symbol=SPIRIT_USDT">Hotbit</StyledLink>
          </Colums>
          <Colums>
            <Title>Spirit Token</Title>
            <StyledLink href="https://www.coingecko.com/en/coins/spiritswap">Coingecko</StyledLink>
            <StyledLink href="https://coinmarketcap.com/exchanges/spiritswap/">CoinMarketCap</StyledLink>
          </Colums>

          <Colums>
            <Title>Business</Title>
            <StyledLink href="https://forms.gle/NAC6oFjSytU5Gs2Q9">Apply for Farm</StyledLink>
          </Colums>

          <Colums>
            <Title>Auditors</Title>
            <StyledLink href="https://github.com/Layer3Org/spiritswap-core/blob/main/SpiritSwap-Core%20Security%20Audit%20Report.pdf">
              Mixbytes
            </StyledLink>
          </Colums>
        </LinksColum>
      </Body>
    </Wrapper>
  );
};

export default Footer;

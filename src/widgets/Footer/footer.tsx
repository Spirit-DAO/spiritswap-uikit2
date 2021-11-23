import React from "react";
import {
  Wrapper,
  Body,
  SocialColum,
  Colums,
  Title,
  StyledLink,
  InfoItems,
  Info,
  LinksColum,
  Copyright,
  CopyrightInMobile,
} from "./styles";

import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Body>
        <SocialColum>
          <SocialLinks />
          <Info>
            <InfoItems href="https://info.spiritswap.finance/" external>
              Analytics
            </InfoItems>
            <InfoItems href="https://layer3.gitbook.io/spirit-swap/" external>
              Docs
            </InfoItems>
            <InfoItems href="https://fantom.foundation/blog/fantom-ecosystem-spotlight-spiritswap/" external>
              About Us
            </InfoItems>
          </Info>
          <Copyright>© 2021 SpiritSwap</Copyright>
        </SocialColum>

        <LinksColum>
          <Colums>
            <Title>Spirit DEX</Title>
            <StyledLink href="https://defillama.com/protocol/spiritswap" external>
              Defi Llama
            </StyledLink>
            <StyledLink href="https://www.coingecko.com/en/exchanges/spiritswap" external>
              CoinGecko
            </StyledLink>
            <StyledLink href="https://coinmarketcap.com/exchanges/spiritswap/" external>
              CoinMarketCap
            </StyledLink>
          </Colums>

          <Colums>
            <Title>Exchanges</Title>
            <StyledLink href="https://www.gate.io/trade/SPIRIT_USDT" external>
              Gate.io
            </StyledLink>
            <StyledLink href="https://www.mexc.com/exchange/SPIRIT_USDT" external>
              MEXC
            </StyledLink>
            <StyledLink href="https://www.hotbit.io/exchange?symbol=SPIRIT_USDT" external>
              Hotbit
            </StyledLink>
          </Colums>
          <Colums>
            <Title>Spirit Token</Title>
            <StyledLink href="https://www.coingecko.com/en/coins/spiritswap" external>
              CoinGecko
            </StyledLink>
            <StyledLink href="https://coinmarketcap.com/exchanges/spiritswap/" external>
              CoinMarketCap
            </StyledLink>
          </Colums>

          <Colums>
            <Title>Business</Title>
            <StyledLink href="https://forms.gle/NAC6oFjSytU5Gs2Q9" external>
              Apply for Farm
            </StyledLink>
          </Colums>

          <Colums>
            <Title>Auditors</Title>
            <StyledLink
              href="https://github.com/Layer3Org/spiritswap-core/blob/main/SpiritSwap-Core%20Security%20Audit%20Report.pdf"
              external
            >
              MixBytes
            </StyledLink>
          </Colums>
        </LinksColum>
        <CopyrightInMobile>© 2021 SpiritSwap</CopyrightInMobile>
      </Body>
    </Wrapper>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT, PRICE_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps { }

const Container = styled.div`
  flex: none;
  padding: 8px 0;
  background: ${({ theme }) => (theme.isDark ? "#161f33" : "#E6FDFF")};
  border-top: solid 1px #42d784;
  border-bottom: solid 1px #42d784;
`;
const Div = styled.div`
 height: 43px;
 margin: 40px 5px 25px 5px;
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  //justify-content: space-between;
  justify-content: flex-start;
  height: ${MENU_ENTRY_HEIGHT}px;
  //padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const Price = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${PRICE_ENTRY_HEIGHT}px;
  padding: 8px;
  border-top: 1px solid #42BE71;
  // border-bottom: 1px solid #42BE71;
`;


const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <>
      <Price>
        <CakePrice cakePriceUsd={cakePriceUsd} />
      </Price>
      <Container>
        <SocialEntry>
          <SocialLinks />
        </SocialEntry>
        <SettingsEntry>
          {/* FOR ACTIVATE AGAIN, CHANGE THE THEME COLORS */}
          {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
          <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        </SettingsEntry>
      </Container>
    </>
  );
};

export default PanelFooter;

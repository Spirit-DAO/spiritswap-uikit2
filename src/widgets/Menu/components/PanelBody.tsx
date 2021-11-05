import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuBottomEntry, LinkBottomLabel } from "./MenuBottomEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { BadgeNewIcon } from "../icons";
import CakePrice from "./CakePrice";
import SocialLinks from "./SocialLinks";
import { PRICE_ENTRY_HEIGHT } from "../config";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showMenu?: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Price = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${PRICE_ENTRY_HEIGHT}px;
  background-color: rgba(109, 215, 132, 0.15);
  //border-radius: 4px;
  //margin: 8px;
  // padding: 0 8px;
  // border-top: 1px solid #42be71;
  // border-bottom: 1px solid #42be71;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  margin: 8px;
  // border: 1px solid #374151;
  // margin-top: 70px;
  // margin: 70px 8px 8px 8px;
  // border-radius: 8px;
  // padding: 6px;
`;

/* 
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(to top, #151e31 40%, #1F2B46 80%)"
      : "linear-gradient(to top, #E6FDFF 40%, #FFFFFF 80%)"
  }; 
  */

const Div = styled.div`
  height: 43px;
  margin: 40px 5px 25px 5px;
`;

const rotate = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(8px, 0); }
    100%   { transform: translate(0, -0px); }  
  }
`;

const NewIcon = styled(BadgeNewIcon)`
  position: absolute;
  left: 155px;
  width: 40px;
  margin-right: 45px;
  animation: ${rotate} 6s infinite;
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const BottomContainer = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: 9px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, cakePriceUsd }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        const inSpiritLinks = entry.label === "inSpirit" || entry.label === "Boosted Farms" ? "inSpirit" : "noInSpirit";

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => {
            return (
              item.href === location.pathname ||
              (entry.href?.includes("exchange") && location.pathname.includes("exchange"))
            );
          });
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <>
              <BottomContainer>
                {/*   <Accordion
                key={entry.label}
                isPushed={isPushed}
                pushNav={pushNav}
                icon={iconElement}
                label={entry.label}
                initialOpenState={initialOpenState}
                className={calloutClass}
                inSpirit={inSpiritLinks}
              > */}

                {isPushed &&
                  entry.items.map((item) => (
                    <MenuBottomEntry
                      key={item.href}
                      secondary
                      isActive={item.href.toLowerCase() === location.pathname.toLowerCase()}
                      onClick={handleClick}
                      inSpirit={inSpiritLinks}
                    >
                      <MenuLink href={item.href} target={item.target}>
                        {item.label}
                      </MenuLink>
                    </MenuBottomEntry>
                  ))}
                {/* </Accordion> */}
              </BottomContainer>
            </>
          );
        }
        return (
          <MenuEntry
            key={entry.label}
            isActive={
              entry.href === location.pathname ||
              (entry.href?.includes("exchange") && location.pathname.includes("exchange"))
            }
            className={calloutClass}
            inSpirit={inSpiritLinks}
          >
            <MenuLink href={entry.href} target={entry.target} onClick={handleClick}>
              <MenuWrapper>
                {iconElement}
                <LinkLabel isPushed={isPushed} inSpirit={inSpiritLinks}>
                  {entry.label}
                </LinkLabel>
                {entry.label === "LGE" || entry.label === "Bridge" ? <NewIcon /> : null}
              </MenuWrapper>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};
export default PanelBody;

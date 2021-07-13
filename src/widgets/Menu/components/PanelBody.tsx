import React from "react";
import styled, {keyframes} from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  margin-top: 72px;
`;

const rotate = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(25px, 0); }
    100%   { transform: translate(0, -0px); }  
  }
`;

const NewIcon = styled.img`
  width: 43px;
  animation: ${rotate} 3s infinite;
`;




const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href} target={item.target}>
                      {item.label}
                    </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} target={entry.target} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {entry.label === "Exchange" ? <NewIcon src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDI5MS43MjggMjkxLjcyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkxLjcyOCAyOTEuNzI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojM0RCMzlFOyIgZD0iTTI5MS43MjgsMTQ1Ljg2bC0zOS40ODksMjguNTJsMTkuOTQ5LDQ0LjQzOWwtNDguNDY5LDQuODk2bC00Ljg5Niw0OC40NzlsLTQ0LjQzOS0xOS45NTkNCgkJbC0yOC41MiwzOS40ODlsLTI4LjUyLTM5LjQ4OWwtNDQuNDM5LDE5Ljk1OWwtNC44OTYtNDguNDc5bC00OC40NjktNC44OTZsMTkuOTQ5LTQ0LjQzOUwwLDE0NS44NmwzOS40ODktMjguNTExTDE5LjUzLDcyLjkwOQ0KCQlsNDguNDc5LTQuODk2bDQuOTA1LTQ4LjQ3OWw0NC40MywxOS45NTlsMjguNTItMzkuNDg5bDI4LjUyLDM5LjQ4OWw0NC40MzktMTkuOTU5bDQuODg3LDQ4LjQ3OWw0OC40NzksNC44OTZsLTE5Ljk0OSw0NC40Mw0KCQlDMjUyLjI0LDExNy4zNCwyOTEuNzI4LDE0NS44NiwyOTEuNzI4LDE0NS44NnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEwOC4wMzUsMTI3LjYxNWMtMi44MzYsMC00Ljk0MiwxLjc2LTQuOTQyLDQuOTE0djIzLjgzNGgtMC4xMzdMODIuMDUsMTI5LjY5NA0KCQljLTAuODU3LTEuMTQtMi44OTktMi4wODgtNC4xNTgtMi4wODhjLTIuODM2LDAtNC45NDIsMS43Ni00Ljk0Miw0LjkxNHYzNS44MjNjMCwzLjE1NSwyLjEwNiw0LjkxNCw0Ljk0Miw0LjkxNA0KCQljMi44NDUsMCw0Ljk1MS0xLjc2LDQuOTUxLTQuOTE0di0yMy41MTRoMC4xMzdsMjAuOTA3LDI2LjM1YzAuOTIxLDEuMTQsMi44OSwyLjA4OCw0LjE0OSwyLjA4OGMyLjg0NSwwLDQuOTUxLTEuNzYsNC45NTEtNC45MTQNCgkJVjEzMi41M0MxMTIuOTg2LDEyOS4zODQsMTEwLjg4LDEyNy42MTUsMTA4LjAzNSwxMjcuNjE1eiBNMTQ3LjI0MSwxNjQuMTg2aC0xMi4yMDl2LTkuNTgzaDEwLjgyM2MzLjE3MywwLDQuODE0LTIuMjA2LDQuODE0LTQuMzQ5DQoJCWMwLTIuMjE2LTEuNTg2LTQuMzU4LTQuODE0LTQuMzU4aC0xMC44MjN2LTkuMjA5aDExLjYwN2MzLjEsMCw0LjY4Ni0yLjIwNiw0LjY4Ni00LjM0OWMwLTIuMjA2LTEuNTE0LTQuMzY3LTQuNjg2LTQuMzY3aC0xNi4zNTcNCgkJYy0zLjQ5MiwwLTUuMTMzLDIuMzM0LTUuMTMzLDUuNDk4djM0LjY4NGMwLDIuODM2LDIuMTcsNC43MjMsNS4wNzksNC43MjNoMTcuMDE0YzMuMSwwLDQuNjc3LTIuMTk3LDQuNjc3LTQuMzQ5DQoJCUMxNTEuOTE4LDE2Ni4zMjksMTUwLjQwNSwxNjQuMTg2LDE0Ny4yNDEsMTY0LjE4NnogTTIxNCwxMjcuNjE1Yy0zLjE2NCwwLTQuNjg2LDEuNzYtNS4yNyw0LjU0MWwtNS42MDcsMjYuNzk3aC0wLjEzNw0KCQlsLTguNTcxLTI3LjYxN2MtMC43Mi0yLjI3LTIuNjk5LTMuNzItNS4xMzMtMy43MnMtNC40MjIsMS40NS01LjE0MiwzLjcybC04LjU3MSwyNy42MTdoLTAuMTI4bC01LjYwNy0yNi43OTcNCgkJYy0wLjU5My0yLjc4MS0yLjEwNi00LjU0MS01LjI3OS00LjU0MWMtMi44OSwwLTQuNjc3LDIuMTQzLTQuNjc3LDQuMTY3bDAuMjU1LDIuMTM0bDguMzc5LDM0LjQyOA0KCQljMC42NTYsMi42NDQsMi44MzYsNC45MTQsNi41MjgsNC45MTRjMy4yMjgsMCw1LjczNS0yLjAyNCw2LjUyOC00LjYwNGw3LjY1LTI0LjMzNWgwLjEzN2w3LjY1LDI0LjMzNQ0KCQljMC43OTMsMi41OCwzLjMwMSw0LjYwNCw2LjUyOCw0LjYwNGMzLjY5MywwLDUuODgxLTIuMjcsNi41MzctNC45MTRsOC4zNy0zNC40MjhsMC4yNjQtMi4xMzQNCgkJQzIxOC42NzgsMTI5Ljc1OCwyMTYuOSwxMjcuNjE1LDIxNCwxMjcuNjE1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="  /> : null}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;

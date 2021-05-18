import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variant }>`
  //background-color: ${getBackgroundColor};
  //border-radius: 16px;
  display: inline-flex;

  border-radius: 0.5rem;
  color: ${({ theme }) => (theme.isDark ? `#fff` : `#0ad9e4`)};
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(90deg, #42d784, #60d5dc);
  background-origin: border-box;
  box-shadow: ${({ theme }) => (theme.isDark ? `2px 1000px 1px #212230 inset` : `2px 1000px 1px #E6FDFE inset`)};
  background-clip: content-box, border-box;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;

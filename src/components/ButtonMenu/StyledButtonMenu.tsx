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
  border-radius: 0.5rem;
  color: ${({ theme }) => (theme.isDark ? `#fff` : `#0ad9e4`)};
  box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
  border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    linear-gradient(90deg, #42d784, #60d5dc);
  background-origin: border-box;
  box-shadow: ${getBackgroundColor};
  background-clip: content-box, border-box;
  display: inline-flex;
  & > button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;

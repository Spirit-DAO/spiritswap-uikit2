import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.nav,
  backgroundSidebar: lightColors.card,
  backgroundFooter: darkColors.background,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.nav,
  backgroundSidebar: darkColors.card,
  backgroundFooter: darkColors.background,
  hover: "#473d5d",
};

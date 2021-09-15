import React from "react";
import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    inSpirit?: string;
}
declare const MenuBottomEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkLabelBottomMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
    inSpirit: string;
}, never>>;
export { MenuBottomEntry, LinkLabelBottomMemo as LinkBottomLabel };

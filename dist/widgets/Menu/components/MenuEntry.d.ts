import React from "react";
import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    inSpirit?: string;
}
declare const MenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
    inSpirit: string;
}, never>>;
export { MenuEntry, LinkLabelMemo as LinkLabel };

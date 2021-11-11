import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    showMenu: boolean;
    logout: () => void;
    isDark: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;

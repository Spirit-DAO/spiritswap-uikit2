import { Login, Config } from "./types";
interface Props {
    walletConfig: Config;
    login: Login;
    onDismiss: () => void;
    mb: string;
}
declare const WalletCard: ({ login, walletConfig, onDismiss, mb }: Props) => JSX.Element;
export default WalletCard;

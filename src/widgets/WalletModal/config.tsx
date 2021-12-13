import Metamask from "./icons/Metamask";
import Coin98Wallet from "./icons/Coin98Wallet";
import Coinbase from "./icons/Coinbase";
import WalletConnect from "./icons/WalletConnect";
import TrustWallet from './icons/TrustWallet'
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "MetaMask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coin98 Wallet",
    icon: Coin98Wallet,
    connectorId: ConnectorNames.Coin98,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.WalletLink,
  },
  {
    title: "Wallet Connect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Trust Wallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.TrustWallet,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";

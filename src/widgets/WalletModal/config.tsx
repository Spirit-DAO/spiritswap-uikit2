import Metamask from "./icons/Metamask";
import Coin98Wallet from "./icons/Coin98Wallet";
import Coinbase from "./icons/Coinbase";
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
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";

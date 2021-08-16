import Metamask from "./icons/Metamask";
import Coin98Wallet from "./icons/Coin98Wallet";
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
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";

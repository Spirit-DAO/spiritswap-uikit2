import Metamask from "./icons/Metamask";
import { useMatchBreakpoints } from "../../hooks";
import Coin98Wallet from "./icons/Coin98Wallet";
import Coinbase from "./icons/Coinbase";
import WalletConnect from "./icons/WalletConnect";
import CloverWallet from "./icons/CloverWallet";
import TrustWallet from "./icons/TrustWallet";
import { Config, ConnectorNames } from "./types";

const Connectors = (): Config[] => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

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
      title: "Clover Connect",
      icon: CloverWallet,
      connectorId: ConnectorNames.CloverWallet,
    },
    {
      title: "Wallet Connect",
      icon: WalletConnect,
      connectorId: ConnectorNames.WalletConnect,
    },
  ];

  if (isMobile) {
    connectors.push({
      title: "Trust Connect",
      icon: TrustWallet,
      connectorId: ConnectorNames.Injected,
    });

    const cloverIndexToRemove = connectors.findIndex((prop: Config) => prop.title === "Clover Connect");
    if (cloverIndexToRemove) connectors.splice(cloverIndexToRemove, 1);
  }

  return connectors;
};

export default Connectors;
export const connectorLocalStorageKey = "connectorId";

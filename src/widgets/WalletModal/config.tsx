import Metamask from "./icons/Metamask";
import { useMatchBreakpoints } from "../../hooks";
import Coin98Wallet from "./icons/Coin98Wallet";
import Coinbase from "./icons/Coinbase";
import WalletConnect from "./icons/WalletConnect";
import TrustWallet from "./icons/TrustWallet";
import { Config, ConnectorNames } from "./types";

const Connectors = () => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

  let connectors: Config[];

  if (isMobile) {
    connectors = [
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
        title: "Trust Connect",
        icon: TrustWallet,
        connectorId: ConnectorNames.Injected,
      },
    ];
  } else {
    connectors = [
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
    ];
  }

  return connectors;
};

export default Connectors;
export const connectorLocalStorageKey = "connectorId";

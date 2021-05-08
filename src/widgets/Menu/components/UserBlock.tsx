import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  isDark: boolean;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const OwnButton = styled(Button)`
    border-radius: 100rem;
    color: ${({ theme }) => (theme.isDark ? `#fff` : `#0ad9e4`)};
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(90deg, #42d784, #60d5dc);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${({ theme }) => (theme.isDark ? `2px 1000px 1px #1f2b46 inset` : `2px 1000px 1px #fff inset`)};
  `;

  return (
    <div>
      {account ? (
        <OwnButton
          scale="sm"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </OwnButton>
      ) : (
        <OwnButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </OwnButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);

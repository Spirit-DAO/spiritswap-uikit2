import React from "react";
import styled , {keyframes} from "styled-components";
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


  const glowing = keyframes` 
  0% {
    // background-color: #2ba805;
    box-shadow: rgb(96 213 220) 0px 0px 20px;
  }
  20%{
    box-shadow: 0 0 25px rgb(96 213 220);

  }
  40% {
    // background-color: #49e819;
    box-shadow: 0 0 15px rgb(96 213 220);
  }

  60% {
    // background-color: #49e819;
    box-shadow: 0 0 10px rgb(96 213 220);
  }
  80% {
    // background-color: #2ba805;
    box-shadow: 0 0 15px rgb(96 213 220);
  }
  100% {
    // background-color: #2ba805;
    box-shadow: 0 0 20px rgb(96 213 220);
  }
`

  const OwnButton = styled(Button)`
    border-radius: 0.5rem;
    color: ${({ theme }) => (theme.isDark ? `#6DD784` : `#0d0e21`)};
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
      linear-gradient(90deg, #42d784, #60d5dc);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: ${({ theme }) => (theme.isDark ? `2px 1000px 1px #1f2b46 inset` : `2px 1000px 1px #fff inset`)};    
  `; 

  const OwnButtonConnect = styled(Button)`
    border-radius: 0.5rem;
    color: ${({ theme }) => (theme.isDark ? `#6DD784` : `#0d0e21`)};
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px #0ae4b5;
    background-image: none;
    padding: 0 16px;
    background-color: transparent;
    animation: ${glowing} ease-in-out 2s infinite;
    &:hover {
      opacity: 0.6;
    }
  `;

  return (
    <div>
      {account ? (
        <OwnButton
          scale="sm"
          id="wallet"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </OwnButton>
      ) : (
        <OwnButtonConnect
          scale="sm"
          id="connect"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </OwnButtonConnect>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);

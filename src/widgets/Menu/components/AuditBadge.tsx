import React from "react";
import styled from "styled-components";

interface Props {
  isPushed: boolean;
}

const Wrapper = styled.a<{ isPushed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  height: fit-content;
  margin: 0.5rem auto;

  span {
    color: white;
    display: ${({ isPushed }) => (isPushed ? "unset" : "none")};
    margin-right: 1rem;
  }
  .logo {
    height: 30px;
  }

  &:hover {
    span {
      color: rgb(96, 213, 220);
    }
  }
}`;

const AuditBadge: React.FC<Props> = ({ isPushed }) => {
  return (
    <Wrapper
      className="audit-badge"
      href="https://github.com/Layer3Org/spiritswap-core/blob/main/SpiritSwap-Core%20Security%20Audit%20Report.pdf"
      rel="noreferrer"
      target="_blank"
      isPushed={isPushed}
    >
      <span>audited by</span>
      <img
        alt="Logo"
        className="logo"
        src="https://static.tildacdn.com/tild3736-6636-4564-a262-333031646230/Logo-mixBytes-kvadra.svg"
      />
    </Wrapper>
  );
};

export default AuditBadge;

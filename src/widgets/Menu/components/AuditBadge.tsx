import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  height: fit-content;
  min-width: 130px;
  padding: 6px 15px;

  span {
    color: white;
    margin-right: 0.5rem;
  }
  .logo {
    height: 30px;
  }

  &:hover {
    span {
      color: rgb(96, 213, 220);
    }
  }

  @media (min-width: 1024px) {
    margin-left: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    min-width: 175px;
    padding: 8px 25px;
    span {
      margin-right: 1rem;
    }
  }
}`;

const AuditBadge: React.FC = () => {
  return (
    <Wrapper
      className="audit-badge"
      href="https://github.com/Layer3Org/spiritswap-core/blob/main/SpiritSwap-Core%20Security%20Audit%20Report.pdf"
      rel="noreferrer"
      target="_blank"
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

import React from "react";
import "./auditBadge.scss";

const AuditBadge: React.FC = () => {
  return (
    <a
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
    </a>
  );
};

export default AuditBadge;

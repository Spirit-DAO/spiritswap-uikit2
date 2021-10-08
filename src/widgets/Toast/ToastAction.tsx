/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router-dom";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Button } from "../../components/Button";
import LinkExternal from "../../components/Link/LinkExternal";
import { ToastAction as Action } from "./types";

interface ToastActionProps {
  action: Action;
}

const ToastAction: React.FC<ToastActionProps> = ({ action }) => {
  if (action.url.startsWith("http")) {
    return (
      <LinkExternal color="secondary" fontSize="16px" href={action.url} {...getExternalLinkProps()}>
        {action.text}
      </LinkExternal>
    );
  }

  return (
    <Button as={Link} scale="sm" to={action.url}>
      {action.text}
    </Button>
  );
};

export default ToastAction;

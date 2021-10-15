/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Alert, alertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import ToastAction from "./ToastAction";
import { ToastProps, types } from "./types";

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
};

const StyledToast = styled.div`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;
  margin-right: 30px;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 400px;
  }
`;

const Fader = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.success};
`;

const AnimatedFader = animated(Fader);

const Toast: React.FC<ToastProps> = ({ toast, onRemove, style, ttl, ...props }) => {
  const timer = useRef<number>();
  const ref = useRef(null);
  const removeHandler = useRef(onRemove);

  const { id, title, description, type, action } = toast;

  const time = type === "info" ? 200000 : ttl;

  const handleRemove = useCallback(() => removeHandler.current(id), [id, removeHandler]);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
  };
  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, time);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, time);

    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, time, handleRemove]);

  let titleSpecific = title;
  let descriptionSpecific = description;

  if (type === "danger") {
    titleSpecific = "Error";
  }
  if (description === "No Ethereum provider was found on window.ethereum.") {
    titleSpecific = "Provider Error";
    descriptionSpecific = "No provider was found.";
  }
  if (description === "Already processing eth_requestAccounts. Please wait.") {
    descriptionSpecific = "Already processing request. Please wait.";
  }

  const faderStyle = useSpring({
    from: { width: "100%" },
    to: { width: "0%" },
    config: { duration: ttl ?? undefined },
  });

  return (
    <CSSTransition nodeRef={ref} timeout={250} style={style} {...props}>
      <StyledToast ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Alert title={titleSpecific} variant={alertTypeMap[type]} onClick={handleRemove}>
          {action ? (
            <>
              <Text as="p" fontSize="14px" mb="24px">
                {descriptionSpecific}
              </Text>

              <ToastAction action={action} />
            </>
          ) : (
            <Text as="p" color="white">
              {description}
            </Text>
          )}

          {ttl !== null && type !== "info" ? <AnimatedFader style={faderStyle} /> : null}
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;

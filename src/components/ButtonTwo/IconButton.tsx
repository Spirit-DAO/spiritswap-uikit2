import styled from "styled-components";
import ButtonTwo from "./ButtonTwo";
import { BaseButtonProps, PolymorphicComponent } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(ButtonTwo)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === "sm" ? "32px" : "48px")};
`;

export default IconButton;

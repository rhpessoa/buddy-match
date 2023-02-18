import React from "react";
import { StyledButton } from "./styles";

export default function Button(props) {
  const { className, onClick, children } = props;
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || "#ccc"};
  color: ${(props) => props.color || "#fff"};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
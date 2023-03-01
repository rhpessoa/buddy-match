import React from "react";
import styled from "styled-components";
import { ThemeContext } from "@/context/ColorThemeContext";
import Link from "next/link";
const ButtonStyled = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export default function Login() {
    const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <div>
      <div>
        <ButtonStyled onClick={toggleTheme}>Troca o tema</ButtonStyled>
      </div>
      <h1>Olá faça seu Login</h1>
      <Link href="/">Clique para voltar</Link>
    </div>
  );
}

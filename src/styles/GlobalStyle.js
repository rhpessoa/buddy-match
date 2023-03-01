import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Jost';
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColorBase};
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  /* Globals */
  button{
  }
  
`;
export default GlobalStyle

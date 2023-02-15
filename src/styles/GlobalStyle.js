import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* CSS Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}

ul, ol {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
export default GlobalStyle;

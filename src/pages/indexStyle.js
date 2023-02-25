import styled from "styled-components";

export const HomeContain = styled.div`
  width: 100vw;
  height: 100vh;
  header {
    display: flex;
    justify-content: end;
    height: 7.88em;
  }
  section {
    text-align: center;
    h1 {
      font-size: 2rem;
      margin: 0.5em 0 0 0;
    }
    .container__imagem {
      height: 18.75em;
      margin-bottom: 2em;
    }
    .container__texto {
      margin: 0 3em;
      span {
        font-size: 1.25rem;
        line-height: 29px;
        font-weight: 300;
      }
    }
    .container__button {
      margin: 3.56em 0;
      .button__conheca {
        font-size: 2rem;
        color: "#000000";
        background-color: "#ffffff";
        height: 2.44em;
        width: 7.75em;
        border-radius: 40px;
        box-shadow: 0px 28px 44px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

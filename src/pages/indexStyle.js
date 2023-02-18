import styled from "styled-components";

export const StyledSwitch = styled.div`
  background-color: #333333;
  border: 0;
  padding: 3px;
  font-size: 12px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: space-around;
  border-radius: 10000px;
  position: relative;
  margin-right: 20px;
  label {
    width: 50px;
  }
  span {
    display: inline-flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
  }
  label:before {
    content: "";
    background-color: #fafafa;
    border: 1px solid #333333;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    cursor: pointer;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label:before {
    transform: translateX(100%);
  }
`;

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
        color: ${({ theme }) => theme.textColorBase};
        background-color: ${({ theme }) => theme.backgroundLevel2};
        height: 2.44em;
        width: 7.75em;
        border-radius: 40px;
        box-shadow: 0px 28px 44px rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

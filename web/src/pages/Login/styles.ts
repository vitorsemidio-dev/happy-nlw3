import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
`;

export const HappyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    margin-bottom: 100px;
  }

  .location {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 34px;

    strong {
      font-weight: 800;
    }
  }
`;

export const FormContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 560px;
  padding: 80px;

  background-color: #fff;
`;

export const Form = styled.form`
  fieldset {
    border: 0;

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      margin-bottom: 16px;
    }
  }
`;

export const FooterForm = styled.footer`
  color: #8fa7b2;
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 24px;
  }

  input[type="checkbox"] {
    margin-right: 16px;
  }

  button {
    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    transition: background-color 0.2s;

    &:hover {
      background: #36cf82;
    }
  }

  a {
    text-align: center;
    text-decoration: none;
  }
`;

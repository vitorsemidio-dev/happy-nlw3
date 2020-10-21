import styled from "styled-components";

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
  width: 100%;

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

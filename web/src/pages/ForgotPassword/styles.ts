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

      span {
        display: block;
        width: 80%;
        font-size: 18px;
        font-weight: 600;
        margin-top: 24px;
      }
    }
  }

  footer button {
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

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;

  width: 48px;
  height: 48px;

  border: 0;

  background: #ebf2f5;
  border-radius: 16px;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #d8e1e5;
  }
`;

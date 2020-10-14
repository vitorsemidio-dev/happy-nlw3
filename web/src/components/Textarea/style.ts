import styled from "styled-components";

export const Container = styled.div`
  margin: 24px 0;

  label {
    color: #8fa7b2;
    display: block;
    margin-bottom: 8px;
    font-size: 16px;

    span {
      font-size: 14px;
      margin-left: 32px;
      color: #8fa7b2;
      font-weight: normal;
    }
  }

  textarea {
    width: 100%;
    height: 120px;
    outline: 0;
    resize: vertical;

    border-radius: 20px;
    padding: 24px;
    outline: none;

    color: #5c8599;
    border: 1px solid #a1e9c5;
    background-color: #f5f8fa;

    font-size: 18px;
  }
`;

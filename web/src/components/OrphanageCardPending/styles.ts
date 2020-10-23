import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 32px;

    strong {
      color: #4d6f80;
    }

    div {
      display: flex;

      a,
      button {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background-color: #ebf2f5;

        outline: none;
        border: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: background-color 0.3s;

        &:hover {
          background-color: #cedee5;
        }

        & + * {
          margin-left: 8px;
        }
      }
    }
  }
`;

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

export const Form = styled.form`
  width: 520px;
  background-color: #fff;
`;

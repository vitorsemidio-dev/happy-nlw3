import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const OrphanageListContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 64px auto;

  /* background-color: #fadd36; */

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 24px;
    border-bottom: 1px solid #d3e2e5;

    h2 {
      font-weight: 800;
      font-size: 32px;
      line-height: 34px;
      color: #4d6f80;
    }

    span {
      color: #8fa7b2;
      font-size: 16;
      font-weight: 600;
    }
  }
`;

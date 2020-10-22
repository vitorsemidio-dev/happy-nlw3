import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
    padding-left: 96px;
  }
`;

export const OrphanageSessionContainer = styled.section`
  width: 90%;
  max-width: 1120px;
  margin: 64px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 24px;
    margin-bottom: 40px;
    border-bottom: 2px solid #d3e2e5;

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

export const OrphanageListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

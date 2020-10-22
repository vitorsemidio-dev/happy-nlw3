import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  main {
    flex: 1;
  }
`;

export const OrphanageSessionContainer = styled.section`
  width: 100%;
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

export const OrphanageCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;

  div.map {
    width: 100%;
    height: 220px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 32px;

    strong {
      color: #4d6f80;
    }
  }
`;

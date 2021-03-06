import { Link } from "react-router-dom";
import styled from "styled-components";

import landingImg from "../../assets/img/ilustracao.png";

export const ContainerLanding = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  header img {
    height: 120px;
  }

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 698px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landingImg}) no-repeat 80% center;

  main h1 {
    max-width: 358px;
    font-weight: 900px;
    font-size: 76px;
    line-height: 78px;
  }

  main p {
    max-width: 358px;
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  .location {
    position: absolute;
    top: 0;
    left: 200px;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;
  }

  .location strong {
    font-weight: 800;
  }

  .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s;
  }

  .enter-app:hover {
    background: #96feff;
  }
`;

export const RestrictAccess = styled(Link)`
  text-decoration: none;
  border-radius: 30px;
  height: 56px;
  width: 222px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #12d4e0;
  color: #fff;

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: #96feff;
    color: #15c3d6;
  }
`;

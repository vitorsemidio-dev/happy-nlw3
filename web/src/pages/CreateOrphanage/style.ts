/** @format */

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  width: 96px;
  height: 100%;

  background-color: #15c3d6;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 708px;

  border-radius: 20px;
  padding: 64px 80px 80px;
  margin-bottom: 80px;
  background-color: #fff;
`;

export const Form = styled.form`
  fieldset {
    border: 0;

    legend {
      width: 100%;
      color: #4d6f80;
      font-size: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid #d3e2e5;
    }
  }
`;

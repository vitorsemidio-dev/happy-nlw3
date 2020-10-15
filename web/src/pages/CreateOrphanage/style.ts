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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;

  width: 96px;
  height: 100%;
  padding: 24px;

  background-color: #15c3d6;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 48px;
    height: 56px;
  }

  a {
    width: 48px;
    height: 48px;
    border-radius: 30px;

    background-color: #12afcb;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s;

    &:hover {
      background-color: #17d6eb;
    }
  }
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

  button {
    cursor: pointer;
    background-color: #37c77f;
    color: #fff;

    height: 64px;
    width: 100%;
    border-radius: 20px;

    border: 0;
    text-align: center;
    vertical-align: middle;

    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3ee08f;
    }
  }
`;

export const Title = styled.h2`
  color: #8fa7b2;
  font-weight: normal;
  font-size: 18px;
  margin-bottom: 24px;
  text-align: center;
`;

export const ContainerImage = styled.div``;

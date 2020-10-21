import React from "react";

import logotipo from "../../assets/img/logotipo.svg";

import { Container, HappyContainer, Form } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <HappyContainer>
        <img src={logotipo} alt="Logotipo Happy" />
        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>
      </HappyContainer>
      <Form>Form</Form>
    </Container>
  );
};

export default Login;

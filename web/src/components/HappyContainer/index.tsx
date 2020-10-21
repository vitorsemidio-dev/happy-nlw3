import React from "react";

import { Container, HappyContent } from "./styles";

import logotipo from "../../assets/img/logotipo.svg";

const HappyContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <HappyContent>
        <img src={logotipo} alt="Logotipo Happy" />
        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>
      </HappyContent>
      {children}
    </Container>
  );
};

export default HappyContainer;

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import logoImg from "../../assets/img/logo.svg";

import { ContainerLanding, ContentWrapper } from "./styles";

const Landing: React.FC = () => {
  return (
    <ContainerLanding id="page-landing">
      <ContentWrapper className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mudo o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link to="/maps" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </ContainerLanding>
  );
};

export default Landing;

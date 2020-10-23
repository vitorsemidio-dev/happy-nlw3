import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import logoImg from "../../assets/img/logotipo.svg";

import { ContainerLanding, ContentWrapper, RestrictAccess } from "./styles";

const Landing: React.FC = () => {
  return (
    <ContainerLanding id="page-landing">
      <ContentWrapper className="content-wrapper">
        <header>
          <img src={logoImg} alt="Logo Happy" />
          <div className="location">
            <strong>Rio de Janeiro</strong>
            <span>Rio de Janeiro</span>
          </div>

          <RestrictAccess to="login">Acesso Restrigo</RestrictAccess>
        </header>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mudo o dia de muitas crianças.</p>
        </main>

        <Link to="/maps" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </ContainerLanding>
  );
};

export default Landing;

import React from "react";

import Sidebar from "../../components/Sidebar";

import { Container, OrphanageListContainer } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <main>
        <OrphanageListContainer>
          <header>
            <h2>Orfanatos Cadastrados</h2>
            <span>2 orfanatos</span>
          </header>
        </OrphanageListContainer>
      </main>
    </Container>
  );
};

export default Dashboard;

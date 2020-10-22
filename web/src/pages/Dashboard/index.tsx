import React from "react";

import Sidebar from "../../components/Sidebar";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  OrphanageCard,
} from "./styles";

const Dashboard: React.FC = () => {
  const orphanages = ["Orf. Esperança", "Melhores amigos"];
  return (
    <Container>
      <Sidebar />
      <main>
        <OrphanageSessionContainer>
          <header>
            <h2>Orfanatos Cadastrados</h2>
            <span>2 orfanatos</span>
          </header>

          <OrphanageListContainer>
            {orphanages.map((orphanage) => (
              <OrphanageCard key={orphanage}>
                <div className="map">Marker</div>
                <footer>
                  <strong>{orphanages}</strong>
                  <div>
                    <button type="submit">a</button>
                    <button type="submit">b</button>
                  </div>
                </footer>
              </OrphanageCard>
            ))}
          </OrphanageListContainer>
        </OrphanageSessionContainer>
      </main>
    </Container>
  );
};

export default Dashboard;

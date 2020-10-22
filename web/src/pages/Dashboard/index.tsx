import React, { useEffect, useMemo, useState } from "react";

import { FiEdit, FiTrash } from "react-icons/fi";

import api from "../../services/api";

import Sidebar from "../../components/Sidebar";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  OrphanageCard,
} from "./styles";

interface Orphanage {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    const loadOrphanages = async () => {
      const { data } = await api.get<Orphanage[]>("/orphanages");

      setOrphanages(data);
    };

    loadOrphanages();
  }, []);

  const orphanagesFound = useMemo(() => orphanages.length, [orphanages]);

  return (
    <Container>
      <Sidebar />
      <main>
        <OrphanageSessionContainer>
          <header>
            <h2>Orfanatos Cadastrados</h2>
            <span>{orphanagesFound} orfanatos</span>
          </header>

          <OrphanageListContainer>
            {orphanages.map((orphanage) => (
              <OrphanageCard key={String(orphanage.id)}>
                <div className="map">Marker</div>
                <footer>
                  <strong>{orphanage.name}</strong>
                  <div>
                    <button type="button">
                      <FiEdit size={24} color="#15C3D6" />
                    </button>
                    <button type="button">
                      <FiTrash size={24} color="#15C3D6" />
                    </button>
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

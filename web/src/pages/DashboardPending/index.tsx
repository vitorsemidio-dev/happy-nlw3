import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiMapPin, FiAlertCircle } from "react-icons/fi";

import OrphanageCard from "../../components/OrphanageCard";
import Sidebar from "../../components/Sidebar";

import api from "../../services/api";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  DashboardButtonsContainer,
} from "./styles";

interface Orphanage {
  id: number;
  name: string;
}

const DashboardPending: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const loadOrphanages = useCallback(async () => {
    const { data } = await api.get<Orphanage[]>("/orphanages");

    setOrphanages(data);
  }, []);

  useEffect(() => {
    loadOrphanages();
  }, [loadOrphanages]);

  const orphanagesFound = useMemo(() => orphanages.length, [orphanages]);

  const handleDeleteOrphanage = useCallback(
    async (orphanage: Orphanage) => {
      await api.delete(`/orphanages/${orphanage.id}`);

      loadOrphanages();
    },
    [loadOrphanages]
  );

  return (
    <Container>
      <Sidebar>
        <DashboardButtonsContainer>
          <button style={{ backgroundColor: "#12AFCB", borderRadius: 20 }}>
            <FiMapPin size={24} color="#fff" />
          </button>
          <button style={{ backgroundColor: "#12AFCB", borderRadius: 20 }}>
            <FiAlertCircle size={24} color="#fff" />
          </button>
        </DashboardButtonsContainer>
      </Sidebar>
      <main>
        <OrphanageSessionContainer>
          <header>
            <h2>Cadastros Pendentes</h2>
            <span>{orphanagesFound} orfanatos</span>
          </header>

          <OrphanageListContainer>
            {orphanages.map((orphanage) => (
              <OrphanageCard
                key={String(orphanage.id)}
                orphanage={orphanage}
                onDeleteOrphanage={handleDeleteOrphanage}
              ></OrphanageCard>
            ))}
          </OrphanageListContainer>
        </OrphanageSessionContainer>
      </main>
    </Container>
  );
};

export default DashboardPending;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiMapPin, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import api from "../../services/api";

import OrphanageCard from "../../components/OrphanageCard";
import Sidebar from "../../components/Sidebar";
import OrphanageModel from "../../models/Orphanage.model";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  DashboardLinksContainer,
} from "./styles";

const Dashboard: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageModel[]>([]);

  const loadOrphanages = useCallback(async () => {
    const { data } = await api.get<OrphanageModel[]>("/orphanages");

    setOrphanages(data);
  }, []);

  useEffect(() => {
    loadOrphanages();
  }, [loadOrphanages]);

  const orphanagesFound = useMemo(() => orphanages.length, [orphanages]);

  const handleDeleteOrphanage = useCallback(
    async (orphanage: OrphanageModel) => {
      await api.delete(`/orphanages/${orphanage.id}`);

      loadOrphanages();
    },
    [loadOrphanages]
  );

  return (
    <Container>
      <Sidebar>
        <DashboardLinksContainer>
          <Link to="/dashboard" className="active">
            <FiMapPin size={24} />
          </Link>
          <Link to="/dashboard/pending">
            <FiAlertCircle size={24} color="#fff" />
          </Link>
        </DashboardLinksContainer>
      </Sidebar>
      <main>
        <OrphanageSessionContainer>
          <header>
            <h2>Orfanatos Cadastrados</h2>
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

export default Dashboard;

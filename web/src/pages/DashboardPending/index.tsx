import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiMapPin, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import OrphanageCardPending from "../../components/OrphanageCardPending";
import Sidebar from "../../components/Sidebar";

import api from "../../services/api";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  DashboardLinksContainer,
} from "./styles";

interface Orphanage {
  id: number;
  name: string;
}

const DashboardPending: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  const loadOrphanages = useCallback(async () => {
    const { data } = await api.get<Orphanage[]>("/orphanages?status=pending");

    setOrphanages(data);
  }, []);

  useEffect(() => {
    loadOrphanages();
  }, [loadOrphanages]);

  const orphanagesFound = useMemo(() => orphanages.length, [orphanages]);

  return (
    <Container>
      <Sidebar>
        <DashboardLinksContainer>
          <Link to="/dashboard">
            <FiMapPin size={24} color="#fff" />
          </Link>
          <Link to="/dashboard/pending" className="active">
            <FiAlertCircle size={24} />
          </Link>
        </DashboardLinksContainer>
      </Sidebar>
      <main>
        <OrphanageSessionContainer>
          <header>
            <h2>Cadastros Pendentes</h2>
            <span>{orphanagesFound} orfanatos</span>
          </header>

          <OrphanageListContainer>
            {orphanages.map((orphanage) => (
              <OrphanageCardPending
                key={String(orphanage.id)}
                orphanage={orphanage}
              ></OrphanageCardPending>
            ))}
          </OrphanageListContainer>
        </OrphanageSessionContainer>
      </main>
    </Container>
  );
};

export default DashboardPending;
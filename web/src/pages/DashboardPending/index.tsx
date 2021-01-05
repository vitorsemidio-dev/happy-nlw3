import React, { useCallback, useEffect, useMemo, useState } from "react";
import { FiMapPin, FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import OrphanageCardPending from "../../components/OrphanageCardPending";
import Sidebar from "../../components/Sidebar";
import OrphanageModel from "../../models/Orphanage.model";
import sadFace from "../../assets/img/sad-face.svg";

import api from "../../services/api";

import {
  Container,
  OrphanageSessionContainer,
  OrphanageListContainer,
  DashboardLinksContainer,
  OrphanageNotFoundContainer,
} from "./styles";

const DashboardPending: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageModel[]>([]);

  const loadOrphanages = useCallback(async () => {
    const { data } = await api.get<OrphanageModel[]>(
      "/orphanages?status=pending"
    );

    setOrphanages(data);
  }, []);

  useEffect(() => {
    loadOrphanages();
  }, [loadOrphanages]);

  const orphanagesFound = useMemo(() => orphanages.length, [orphanages]);

  return (
    <Container>
      <Sidebar showBackButton={false} showSignOutButton>
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

          {orphanagesFound === 0 ? (
            <OrphanageNotFoundContainer>
              <img alt="Nenhum orfanato pendente encontrado" src={sadFace} />
              <p>Nenhum orfanato pendente encontrado</p>
            </OrphanageNotFoundContainer>
          ) : (
            <OrphanageListContainer>
              {orphanages.map((orphanage) => (
                <OrphanageCardPending
                  key={String(orphanage.id)}
                  orphanage={orphanage}
                ></OrphanageCardPending>
              ))}
            </OrphanageListContainer>
          )}
        </OrphanageSessionContainer>
      </main>
    </Container>
  );
};

export default DashboardPending;

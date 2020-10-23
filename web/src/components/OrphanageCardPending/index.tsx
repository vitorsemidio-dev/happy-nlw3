import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MapStaticCard from "../MapStaticCard";

import { CardContainer } from "./styles";

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface OrphanageCardProps {
  orphanage: Orphanage;
}

const OrphanageCardPending: React.FC<OrphanageCardProps> = ({ orphanage }) => {
  return (
    <CardContainer>
      <div className="map">
        <MapStaticCard
          latitude={orphanage.latitude}
          longitude={orphanage.longitude}
        />
      </div>
      <footer>
        <strong>{orphanage.name}</strong>
        <div>
          <Link to={`/orphanages/${orphanage.id}/status`}>
            <FiArrowRight size={24} color="#15C3D6" />
          </Link>
        </div>
      </footer>
    </CardContainer>
  );
};

export default OrphanageCardPending;

import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import MapStaticCard from "../MapStaticCard";

import OrphanageModel from "../../models/Orphanage.model";

import { CardContainer } from "./styles";

interface OrphanageCardProps {
  orphanage: OrphanageModel;
  onDeleteOrphanage: (orphanage: OrphanageModel) => Promise<void>;
}

const OrphanageCard: React.FC<OrphanageCardProps> = ({
  orphanage,
  onDeleteOrphanage,
}) => {
  return (
    <CardContainer>
      <MapStaticCard
        latitude={orphanage.latitude}
        longitude={orphanage.longitude}
      />
      <footer>
        <strong>{orphanage.name}</strong>
        <div>
          <Link to={`/orphanages/${orphanage.id}/edit`}>
            <FiEdit size={24} color="#15C3D6" />
          </Link>
          <button type="button">
            <FiTrash
              size={24}
              color="#15C3D6"
              onClick={() => onDeleteOrphanage(orphanage)}
            />
          </button>
        </div>
      </footer>
    </CardContainer>
  );
};

export default OrphanageCard;

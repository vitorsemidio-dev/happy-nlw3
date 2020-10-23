import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import { CardContainer } from "./styles";

interface Orphanage {
  id: number;
  name: string;
}

interface OrphanageCardProps {
  orphanage: Orphanage;
  onDeleteOrphanage: (orphanage: Orphanage) => Promise<void>;
}

const OrphanageCard: React.FC<OrphanageCardProps> = ({
  orphanage,
  onDeleteOrphanage,
}) => {
  return (
    <CardContainer>
      <div className="map">Marker</div>
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

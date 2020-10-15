import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../../assets/img/map-marker.svg";

import { SidebarContainer } from "./styles";

export const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  return (
    <SidebarContainer>
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </SidebarContainer>
  );
};

export default Sidebar;

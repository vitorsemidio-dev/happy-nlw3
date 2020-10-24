import React, { useCallback } from "react";
import { FiArrowLeft, FiPower } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import mapMarkerImg from "../../assets/img/map-marker.svg";

import { SidebarContainer } from "./styles";

interface SidebarProps {
  showSignOutButton?: boolean;
  showBackButton?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  showBackButton = true,
  showSignOutButton = false,
}) => {
  const { goBack, push } = useHistory();
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
    push("/");
  }, [signOut, push]);

  return (
    <SidebarContainer>
      <img src={mapMarkerImg} alt="Happy" />

      {children}

      <footer>
        {showBackButton && (
          <button type="button" className="link-button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        )}

        {showSignOutButton && (
          <button type="button" onClick={() => handleSignOut()}>
            <FiPower size={24} color="#FFF" />
          </button>
        )}
      </footer>
    </SidebarContainer>
  );
};

export default Sidebar;

import styled from "styled-components";
import { Link } from "react-router-dom";
import Leaflet from "leaflet";
import { Popup } from "react-leaflet";

export const OrphanagesMapContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Sidebar = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;

    font-size: 24px;
    line-height: 34px;
  }

  footer strong {
    font-weight: 800;
  }
`;

export const LinkCreateOrphanage = styled(Link)`
  position: absolute;
  right: 48px;
  bottom: 48px;

  width: 64px;
  height: 64px;

  background: #15c3e6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  transition: background 0.3s;

  &:hover {
    background: #17d6eb;
  }
`;

export const PopupOrphanage = styled(Popup)<Leaflet.PopupOptions>`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { Map, TileLayer, Marker } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

import {
  OrphanagesMapContainer,
  Sidebar,
  LinkCreateOrphanage,
  PopupOrphanage,
} from "./styles";

import mapMarkerImg from "../../assets/img/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <OrphanagesMapContainer id="page-map">
      <Sidebar>
        <header>
          <img src={mapMarkerImg} alt="Marcador do Mapa" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Rio de Janerio</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </Sidebar>

      <Map
        center={[-22.932017, -43.2086569]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Marker position={[-22.932017, -43.2086569]} icon={mapIcon}>
          <PopupOrphanage closeButton={false} minWidth={240} maxWidth={240}>
            Lar das meninas
            <Link to="">
              <FiArrowRight color="#fff" size={20} />
            </Link>
          </PopupOrphanage>
        </Marker>
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <LinkCreateOrphanage to="/create-orphanage">
        <FiPlus size={32} color="#fff" />
      </LinkCreateOrphanage>
    </OrphanagesMapContainer>
  );
};

export default OrphanagesMap;

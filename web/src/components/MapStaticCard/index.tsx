import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

import mapMarkerImg from "../../assets/img/map-marker.svg";

import { MapContainer } from "./styles";

interface MapStaticCardProps {
  latitude: number;
  longitude: number;
}

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const MapStaticCard: React.FC<MapStaticCardProps> = ({
  latitude,
  longitude,
}) => {
  return (
    <MapContainer>
      <Map
        center={[latitude, longitude]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          interactive={false}
          icon={happyMapIcon}
          position={[latitude, longitude]}
        />
      </Map>
    </MapContainer>
  );
};

export default MapStaticCard;

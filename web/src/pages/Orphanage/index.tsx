import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar";

import api from "../../services/api";
import mapMarkerImg from "../../assets/img/map-marker.svg";

import "./orphanage.css";

import {
  ContainerOrphanage,
  OrphanageDetails,
  OrphanageDetailsContent,
} from "./styles";

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

interface Orphanage {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: string;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get<Orphanage>(`orphanages/${params.id}`).then((response) => {
      console.log(response.data);
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }
  return (
    <ContainerOrphanage id="page-orphanage">
      <Sidebar />

      <main>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt="Lar das meninas"
          />

          <div className="images">
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? "active" : ""}
                onClick={() => setActiveImageIndex(index)}
                type="button"
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </div>

          <OrphanageDetailsContent>
            <h1> {orphanage.name} </h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
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
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends close">
                  <FiInfo size={32} color="#FF669D" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </main>
    </ContainerOrphanage>
  );
}

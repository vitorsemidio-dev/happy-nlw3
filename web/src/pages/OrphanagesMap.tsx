import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanagesMap.css';

import mapMarkerImg from '../assets/img/map-marker.svg';

const OrphanagesMap: React.FC = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marcador do Mapa"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Rio de Janerio</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map
                center={
                    [-22.932017,-43.2086569]
                }
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
             >
                 <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
             </Map>

            <Link to="/create-orphanage" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;
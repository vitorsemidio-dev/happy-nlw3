import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

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

            <div className="map">

            </div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;
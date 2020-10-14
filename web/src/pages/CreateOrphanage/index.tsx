import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { FiArrowLeft } from 'react-icons/fi';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import logoImg from '../../assets/img/logo.svg'

import { Container, Main, Sidebar, Form, Title } from './style';

const CreateOrphanage: React.FC = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekend, setOpenOnWeekend] = useState(false);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setSelectedPosition([lat, lng]);
  }, [setSelectedPosition]);

  return (
    <Container>
      <Sidebar >
        <img src={logoImg} alt="Logo Happy" />
        <Link to="/maps">
          <FiArrowLeft size={26} color="#fff" />
        </Link>
      </Sidebar>
      <Main>
        <Title>
          Adicione um Orfanato
        </Title>

        <Form>
          <fieldset>
            <legend>Dados</legend>

            {/* <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={selectedPosition} />
            </Map> */}

            <Input
              name="name"
              label="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <Textarea
              name="about"
              label="Sobre"
              extraInfo="Máximo de 300 catacteres"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />

            <Input
              name="whatsapp"
              label="Número de Whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />

            {/* TODO: Fotos */}

          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Textarea
              name="instructions"
              label="Instruções"
              value={instructions}
              onChange={(e) => {
                setInstructions(e.target.value);
              }}
            />

            <Input
              name="opening_hours"
              label="Horário das visitas"
              value={opening_hours}
              onChange={(e) => {
                setOpeningHours(e.target.value);
              }}
            />

            {/* TODO: Atende Fim de Semana */}

          </fieldset>

          <button>
            Confirmar
          </button>
        </Form>
      </Main>
    </Container>
  )
}

export default CreateOrphanage;

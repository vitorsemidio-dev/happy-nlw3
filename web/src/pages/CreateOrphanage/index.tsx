import React, { FormEvent, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import Leaflet, { LeafletMouseEvent } from "leaflet";
import { FiArrowLeft, FiPlus } from "react-icons/fi";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";

import api from "../../services/api";

import mapMarkerImg from "../../assets/img/logo.svg";

import { Container, Main, Sidebar, Form, Title, ContainerImage } from "./style";

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanage: React.FC = () => {
  const history = useHistory();
  const { goBack } = useHistory();

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [selectedImages, setSelectedImages] = useState<File[]>();

  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");
  const [open_on_weekends, setOpenOnWeekend] = useState(false);

  const handleMapClick = useCallback(
    (event: LeafletMouseEvent) => {
      const { lat, lng } = event.latlng;
      setSelectedPosition([lat, lng]);
    },
    [setSelectedPosition]
  );

  const handleCreateOrphanage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const data = new FormData();

      data.append("name", name);
      data.append("latitude", String(selectedPosition[0]));
      data.append("longitude", String(selectedPosition[1]));
      data.append("about", about);
      data.append("instructions", instructions);
      data.append("opening_hours", opening_hours);
      data.append("open_on_weekends", String(open_on_weekends));

      if (selectedImages) {
        selectedImages.forEach((image) => data.append("images", image));
      }

      api
        .post("/orphanages", data)
        .then(() => {
          alert("Cadastro criado com sucesso!");

          history.push("/");
        })
        .catch(() => {
          alert("Erro no cadastro!");
        });
    },
    [
      name,
      selectedPosition,
      whatsapp,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      history,
    ]
  );

  return (
    <Container>
      <Sidebar>
        <img src={mapMarkerImg} alt="Logo Happy" />
        <Link to="/maps">
          <FiArrowLeft size={26} color="#fff" />
        </Link>
      </Sidebar>
      <Main>
        <Title>Adicione um Orfanato</Title>

        <Form onSubmit={(e) => handleCreateOrphanage(e)}>
          <fieldset>
            <legend>Dados</legend>

            <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {/* <Marker position={selectedPosition} /> */}
              <Marker
                interactive={false}
                icon={happyMapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

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

            <ContainerImage className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image"></div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </ContainerImage>
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

          <button>Confirmar</button>
        </Form>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;

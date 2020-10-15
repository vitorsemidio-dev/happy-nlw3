import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import Leaflet, { LeafletMouseEvent } from "leaflet";
import { FiPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import Textarea from "../../components/Textarea";
import Input from "../../components/Input";
import Sidebar from "../../components/Sidebar";

import api from "../../services/api";

import mapMarkerImg from "../../assets/img/map-marker.svg";

import { Container, Form } from "./styles";

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open_on_weekends, setOpenOnWeekend] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const { latitude, longitude } = position;
      const data = new FormData();

      data.append("name", name);
      data.append("latitude", String(latitude));
      data.append("longitude", String(longitude));
      data.append("about", about);
      data.append("instructions", instructions);
      data.append("opening_hours", opening_hours);
      data.append("open_on_weekends", String(open_on_weekends));

      if (images) {
        images.forEach((image) => data.append("images", image));
      }

      await api.post("/orphanages", data);

      alert("Cadastro realizado com sucesso");

      history.push("/maps");
    },
    [
      position,
      open_on_weekends,
      name,
      about,
      instructions,
      opening_hours,
      history,
      images,
    ]
  );

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return;
      }

      const selectedImages = Array.from(event.target.files);
      setImages(selectedImages);

      const selectedImagesPreview = selectedImages.map((image) => {
        return URL.createObjectURL(image);
      });

      setPreviewImages(selectedImagesPreview);
    },
    []
  );

  return (
    <Container id="page-create-orphanage">
      <Sidebar />

      <main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-22.932017, -43.2086569]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
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

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={`${image}`} />;
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </div>
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

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekend(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                  onClick={() => setOpenOnWeekend(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </Form>
      </main>
    </Container>
  );
};

export default CreateOrphanage;

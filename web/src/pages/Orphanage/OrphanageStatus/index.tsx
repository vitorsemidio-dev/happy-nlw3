import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useHistory, useParams } from "react-router-dom";

import Textarea from "../../../components/Textarea";
import Input from "../../../components/Input";
import Sidebar from "../../../components/Sidebar";
import MapstaticCard from "../../../components/MapStaticCard";
import OrphanageModel from "../../../models/Orphanage.model";

import api from "../../../services/api";

import { Container, Form } from "./styles";

interface OrphanageParams {
  id: string;
}
const OrphanageFormStatus: React.FC = () => {
  const history = useHistory();
  const params = useParams<OrphanageParams>();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open_on_weekends, setOpenOnWeekend] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [instructions, setInstructions] = useState("");
  const [opening_hours, setOpeningHours] = useState("");

  const [approved, setApproved] = useState(false);

  useEffect(() => {
    if (!params || !params.id) return;

    const loadOrphanageData = async () => {
      const { data } = await api.get<OrphanageModel>(
        `/orphanages/${params.id}`
      );

      setName(data.name);
      setAbout(data.about);
      setInstructions(data.instructions);
      setOpenOnWeekend(data.open_on_weekends);
      setOpeningHours(data.opening_hours);
      setPosition({ latitude: data.latitude, longitude: data.longitude });
      // setImages(data.images)
      setPreviewImages(data.images.map((image) => image.url));
    };

    loadOrphanageData();
  }, [params]);

  const navigateToDashboardPending = useCallback(() => {
    history.push("/dashboard/pending");
  }, [history]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await api.put(`/orphanages/${params.id}/status`, {
        approved,
      });

      navigateToDashboardPending();
    },
    [approved, navigateToDashboardPending, params.id]
  );

  return (
    <Container id="page-create-orphanage">
      <Sidebar />

      <main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <MapstaticCard
              latitude={position.latitude}
              longitude={position.longitude}
            ></MapstaticCard>

            <Input name="name" label="Nome" value={name} readOnly />

            <Textarea name="about" label="Sobre" value={about} readOnly />

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
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Textarea
              name="instructions"
              label="Instruções"
              value={instructions}
              readOnly
            />

            <Input
              name="opening_hours"
              label="Horário das visitas"
              value={opening_hours}
              readOnly
            />

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? "active" : ""}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? "active" : ""}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <footer>
            <button onClick={() => setApproved(false)} className="reject">
              Rejeitar
            </button>

            <button onClick={() => setApproved(true)} className="approve">
              Aprovar
            </button>
          </footer>
        </Form>
      </main>
    </Container>
  );
};

export default OrphanageFormStatus;

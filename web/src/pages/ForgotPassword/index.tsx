import React, { FormEvent, useCallback, useState } from "react";

import Input from "../../components/Input";
import HappyContainer from "../../components/HappyContainer";

import api from "../../services/api";

import { useToast } from "../../hooks/toast";

import { FormContainer, Form, ButtonBack } from "./styles";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (loading) return;

      setLoading(true);
      try {
        await api.post("/passwords/forgot", {
          email,
        });

        addToast({
          title: "Solicitação da recuperação de senha",
          type: "success",
          description:
            "Acesse seu e-mail e informe o token que enviamos para reset da sua senha",
        });

        history.push("/reset-password");
      } catch (err) {
        addToast({
          title: "Falha na solicitação de reset da senha",
          type: "error",
          description:
            "Ocorreu uma falha na tentivação da solicitação de recuperação de senha. Tente novamente mais tarde",
        });
      } finally {
        setLoading(false);
      }
    },
    [email, history, loading]
  );

  return (
    <HappyContainer>
      <FormContainer>
        <ButtonBack type="button" onClick={history.goBack}>
          <FiArrowLeft size={24} color="#15c3d6" />
        </ButtonBack>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>
              Esqueci a senha
              <span>
                Sua redefinição de senha será enviada para o e-mail cadastrado.
              </span>
            </legend>

            <Input
              name="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <footer>
            <button disabled={loading} type="submit">
              Confirmar
            </button>
          </footer>
        </Form>
      </FormContainer>
    </HappyContainer>
  );
};

export default ForgotPassword;

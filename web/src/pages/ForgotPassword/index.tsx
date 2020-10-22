import React, { FormEvent, useCallback, useState } from "react";

import Input from "../../components/Input";
import HappyContainer from "../../components/HappyContainer";

import api from "../../services/api";

import { FormContainer, Form } from "./styles";
import { useHistory } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const history = useHistory();

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

        alert(
          "Recuperação de senha solicitada com sucesso! Acesse seu e-mail para informar a nova senha"
        );

        history.push("/reset-password");
      } catch (err) {
        alert(
          "Falha ao tentar recuperação de senha. Tente novamente mais tarde"
        );
      } finally {
        setLoading(false);
      }
    },
    [email, history, loading]
  );

  return (
    <HappyContainer>
      <FormContainer>
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

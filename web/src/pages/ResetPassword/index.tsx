import React, { FormEvent, useCallback, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import HappyContainer from "../../components/HappyContainer";
import Input from "../../components/Input";

import api from "../../services/api";

import { FormContainer, Form, ButtonBack } from "./styles";

const ResetPassword: React.FC = () => {
  const history = useHistory();

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      await api.put("/passwords/reset", {
        token,
        password,
        passwordConfirmation,
      });

      alert("Senha redefinida com sucesso");
      history.push("/login");
    },
    [token, password, passwordConfirmation, history]
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
              Redefinição de senha
              <span>
                Escolha uma nova senha para você acessar o dashboard do Happy
              </span>
            </legend>

            <Input
              name="token"
              label="Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            <Input
              name="password"
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Input
              name="passwordConfirmation"
              label="Confirmação da senha"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />

            <footer>
              <button type="submit">Resetar senha</button>
            </footer>
          </fieldset>
        </Form>
      </FormContainer>
    </HappyContainer>
  );
};

export default ResetPassword;

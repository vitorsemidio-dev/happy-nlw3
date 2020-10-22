import React, { FormEvent, useCallback, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import HappyContainer from "../../components/HappyContainer";
import Input from "../../components/Input";

import api from "../../services/api";

import { FormContainer, Form, FooterForm, ButtonBack } from "./styles";

const CreateUser: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      api
        .post("/users", {
          name,
          email,
          password,
          passwordConfirmation,
        })
        .then((response) => {
          alert("Parabéns! Sua conta foi criada com sucesso");
          history.push("/login");
        })
        .catch((err) => {
          alert("Falha ao realizar registro");
        });
    },
    [name, email, password, passwordConfirmation, history]
  );

  return (
    <HappyContainer>
      <FormContainer>
        <ButtonBack type="button" onClick={history.goBack}>
          <FiArrowLeft size={24} color="#15c3d6" />
        </ButtonBack>

        <Form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend>Fazer seu cadastro</legend>

            <Input
              name="name"
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              name="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              label="Confirmação de senha"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </fieldset>

          <FooterForm>
            <button type="submit">Criar conta</button>

            <Link to="/login">Fazer login</Link>
          </FooterForm>
        </Form>
      </FormContainer>
    </HappyContainer>
  );
};

export default CreateUser;

import React, { FormEvent, useCallback, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import HappyContainer from "../../components/HappyContainer";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

import { useToast } from "../../hooks/toast";

import api from "../../services/api";

import { FormContainer, Form, FooterForm, ButtonBack } from "./styles";

const CreateUser: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

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
          addToast({
            title: "Parabéns! Sua conta foi criada com sucesso",
            type: "success",
            description: "Entre na sua conta através da tela",
          });
          history.push("/login");
        })
        .catch((err) => {
          addToast({
            title: "Ocorreu uma falha no registro",
            type: "error",
            description:
              "Tentamos criar a sua conta, mas por alguma razão ocorreu uma falha. Tente novamente mais tarde",
          });
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

        <Form onSubmit={handleSubmit}>
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

            <InputPassword
              name="password"
              label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputPassword
              name="passwordConfirmation"
              label="Confirmação de senha"
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

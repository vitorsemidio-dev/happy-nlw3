import React, { useState } from "react";
import { Link } from "react-router-dom";

import HappyContainer from "../../components/HappyContainer";
import Input from "../../components/Input";

import { FormContainer, Form, FooterForm } from "./styles";

const CreateUser: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <HappyContainer>
      <FormContainer>
        <Form>
          <fieldset>
            <legend>Registrar usuário</legend>

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

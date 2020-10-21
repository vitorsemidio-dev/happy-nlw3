import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Input";

import logotipo from "../../assets/img/logotipo.svg";

import {
  Container,
  HappyContainer,
  FormContainer,
  Form,
  FooterForm,
} from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <HappyContainer>
        <img src={logotipo} alt="Logotipo Happy" />
        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>
      </HappyContainer>
      <FormContainer>
        <Form>
          <fieldset>
            <legend>Fazer login</legend>

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
          </fieldset>

          <FooterForm>
            <label>
              <input type="checkbox" />
              Manter-me conectado
            </label>

            <button>Entrar</button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </FooterForm>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

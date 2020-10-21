import React, { FormEvent, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../components/Input";
import { useAuth } from "../../hooks/auth";

import logotipo from "../../assets/img/logotipo.svg";

import {
  Container,
  HappyContainer,
  FormContainer,
  Form,
  FooterForm,
} from "./styles";

const Login: React.FC = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConect, setKeepConect] = useState(true);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      await signIn({ email, password });

      history.push("/");
    },
    [email, history, password, signIn]
  );

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
        <Form onSubmit={handleSubmit}>
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
              <input
                type="checkbox"
                checked={keepConect}
                onChange={(e) => setKeepConect(!keepConect)}
              />
              Manter-me conectado
            </label>

            <button type="submit">Entrar</button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </FooterForm>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Login;

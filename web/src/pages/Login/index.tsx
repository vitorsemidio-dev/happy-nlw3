import React, { FormEvent, useCallback, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../../components/Input";
import { AuthContext } from "../../hooks/auth";

import api from "../../services/api";

import logotipo from "../../assets/img/logotipo.svg";

import {
  Container,
  HappyContainer,
  FormContainer,
  Form,
  FooterForm,
} from "./styles";

interface ISessionResponse {
  token: string;
}

const Login: React.FC = () => {
  const history = useHistory();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepConect, setKeepConect] = useState(true);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      signIn({ email, password });

      // try {
      //   const { data } = await api.post<ISessionResponse>("/sessions", {
      //     email,
      //     password,
      //   });

      //   localStorage.setItem("@Happy:token", data.token);
      //   history.push("/");
      // } catch (err) {
      //   console.log("fail");
      //   console.log(err);
      // }
    },
    [email, password, signIn]
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

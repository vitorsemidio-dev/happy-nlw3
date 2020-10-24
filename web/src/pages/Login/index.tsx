import React, { FormEvent, useCallback, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiLogIn } from "react-icons/fi";

import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import HappyContainer from "../../components/HappyContainer";

import { useAuth } from "../../hooks/auth";

import { FormContainer, Form, FooterForm, ButtonBack } from "./styles";

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

      history.push("/dashboard");
    },
    [email, history, password, signIn]
  );

  return (
    <HappyContainer>
      <FormContainer>
        <ButtonBack type="button" onClick={history.goBack}>
          <FiArrowLeft size={24} color="#15c3d6" />
        </ButtonBack>

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

            <InputPassword
              name="password"
              label="Senha"
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

            <Link to="/create-user">
              <FiLogIn />
              Criar Conta
            </Link>
          </FooterForm>
        </Form>
      </FormContainer>
    </HappyContainer>
  );
};

export default Login;

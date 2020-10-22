import React, { useCallback, useState } from "react";

import Input from "../../components/Input";
import HappyContainer from "../../components/HappyContainer";

import { FormContainer, Form } from "./styles";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(() => {}, []);

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
            <button type="submit">Confirmar</button>
          </footer>
        </Form>
      </FormContainer>
    </HappyContainer>
  );
};

export default ForgotPassword;

import React, { useCallback, useState } from "react";

import HappyContainer from "../../components/HappyContainer";
import Input from "../../components/Input";

const ResetPassword: React.FC = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = useCallback(() => {}, []);

  return (
    <HappyContainer>
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
    </HappyContainer>
  );
};

export default ResetPassword;

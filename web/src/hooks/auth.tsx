import React, { createContext, useCallback } from "react";
import api from "../services/api";

interface IAuthContext {
  name: string;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      const response = await api.post("/sessions", {
        email,
        password,
      });

      console.log(response.data);
    },
    []
  );

  return (
    <AuthContext.Provider value={{ name: "Emidio", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

interface IAuthContext {
  user: any;
  signIn(credentials: ISignInCredentials): Promise<void>;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: any;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Happy:token");
    const user = localStorage.getItem("@Happy:user");
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: ISignInCredentials) => {
      try {
        const response = await api.post<AuthState>("/sessions", {
          email,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem("@Happy:token", token);
        localStorage.setItem("@Happy:user", JSON.stringify(user));

        console.log(response.data);

        setData({ token, user });
      } catch (err) {
        console.log("fail");
      }
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface IAuthContext {
  user: any;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: any;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

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

  const signOut = useCallback(() => {
    localStorage.removeItem("@GoBarber:token");
    localStorage.removeItem("@GoBarber:user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

import React from "react";

import { AuthProvider } from "./hooks/auth";
import { ToastProvider } from "./hooks/toast";
import Routes from "./routes";

import "leaflet/dist/leaflet.css";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </AuthProvider>
  );
};

export default App;

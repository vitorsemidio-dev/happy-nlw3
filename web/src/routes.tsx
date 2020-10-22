import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import DashboardPending from "./pages/DashboardPending";
import OrphanageForm from "./components/OrphanageForm";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/pending" component={DashboardPending} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/create-user" exact component={CreateUser} />
        <Route path="/maps" component={OrphanagesMap} />
        <Route path="/create-orphanage" component={CreateOrphanage} />
        <Route path="/orphanages/:id" exact component={Orphanage} />
        <Route path="/orphanages/:id/edit" exact component={OrphanageForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

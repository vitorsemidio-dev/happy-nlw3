import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

import Dashboard from "./pages/Dashboard";
import DashboardPending from "./pages/DashboardPending";

import OrphanageDetail from "./pages/Orphanage/OrphanageDetail";
import OrphanageForm from "./pages/Orphanage/OrphanageForm";
import OrphanageStatus from "./pages/Orphanage/OrphanageStatus";

import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* App */}
        <Route path="/" exact component={Landing} />
        <Route path="/maps" component={OrphanagesMap} />

        {/* Dashboard */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/pending" exact component={DashboardPending} />

        {/* Orphanage */}
        <Route path="/orphanages/create" component={OrphanageForm} />
        <Route path="/orphanages/:id" exact component={OrphanageDetail} />
        <Route path="/orphanages/:id/edit" exact component={OrphanageForm} />
        <Route
          path="/orphanages/:id/status"
          exact
          component={OrphanageStatus}
        />

        {/* User */}
        <Route path="/login" exact component={Login} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />
        <Route path="/create-user" exact component={CreateUser} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

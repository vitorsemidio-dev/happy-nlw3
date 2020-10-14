import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/maps" component={OrphanagesMap} />
                <Route path="/create-orphanage" component={CreateOrphanage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
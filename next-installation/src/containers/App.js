import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../constants";
import Home from "./Home";
import Write from "./Write";
import Open from "./Open";
import Admin from "./Admin";

function App() {
  return (
    <main>
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.write} component={Write} />
        <Route path={ROUTES.open} component={Open} />
        <Route path={ROUTES.admin} component={Admin} />
      </Switch>
    </main>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "../constants";
import Home from "./Home";
import Onboarding from "./Onboarding";
import Write from "./Write";
import Open from "./Open";
import Answer from "./Answer";
import CardDetail from "./CardDetail";
import Admin from "./Admin";
import Setup from "./Setup";
import Sent from "./Sent";

function App() {
  return (
    <main>
      <Switch>
        <Route path={ROUTES.home} exact strict component={Home} />
        <Route path={ROUTES.onboarding} component={Onboarding} />
        <Route path={ROUTES.write} component={Write} />
        <Route path={ROUTES.open} component={Open} />
        <Route path={ROUTES.answer} component={Answer} />
        <Route path={ROUTES.detail} component={CardDetail} />
        <Route path={ROUTES.admin} component={Admin} />
        <Route path={ROUTES.setup} component={Setup} />
        <Route path={ROUTES.sent} component={Sent} />
        {/* <Route
            path={ROUTES.detail}
            render={({ match }) => {
              const { id } = match.params;
              return <PostDetail id={id} />;
            }}
          /> */}
      </Switch>
    </main>
  );
}

export default App;

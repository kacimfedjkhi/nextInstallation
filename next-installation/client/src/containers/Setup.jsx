import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { ROUTES } from "../constants";
import SetupLocation from "../components/setup/SetupLocation";
import SetupEvent from "../components/setup/SetupEvent";
import SetupUserLanguage from "../components/setup/SetupUserLanguage";

const Setup = ({ uiStore }) => {
  return (
    <>
      <h1>Installation setup</h1>
      <SetupUserLanguage />
      <section>
        {uiStore.adminLanguage === "nl"
          ? "Waar staat deze installatie"
          : "Où se trouve cette installation ?"}
      </section>
      <SetupLocation />
      <SetupEvent />
      <Link to={ROUTES.home}>
        <Button variant="contained">Start</Button>
      </Link>
    </>
  );
};

Setup.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Setup));

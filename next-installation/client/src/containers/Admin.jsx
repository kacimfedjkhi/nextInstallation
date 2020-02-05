import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { ROUTES } from "../constants";

const Admin = ({ uiStore }) => {
  return (
    <>
      <h1>Kies uw taal / choisissez votre langue</h1>
      <div>
        <Button
          variant={uiStore.adminLanguage === "nl" ? "contained" : "text"}
          onClick={() => uiStore.setAdminLanguage("nl")}
        >
          NL
        </Button>
        <p>
          Deze taal stelt u in om de installatie op te starten en heeft geen
          verdere invloed op de installatie zelf.
        </p>
      </div>
      <div>
        <Button
          variant={uiStore.adminLanguage === "fr" ? "contained" : "text"}
          onClick={() => uiStore.setAdminLanguage("fr")}
        >
          FR
        </Button>
        <p>
          Vous définissez cette langue pour l'installation pour démarrer et n'a
          pas plus influence sur l'installation elle-même.
        </p>
      </div>

      <br />

      {uiStore.adminLanguage !== "" ? (
        <Link to={ROUTES.setup}>
          <Button variant="contained">
            {uiStore.adminLanguage === "nl"
              ? content.nl.startBtn
              : content.fr.startBtn}
          </Button>
        </Link>
      ) : null}
    </>
  );
};

const content = {
  nl: {
    startBtn: "Installatie verder configureren"
  },
  fr: {
    startBtn: "Configurer davantage l'installation"
  }
};

Admin.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Admin));

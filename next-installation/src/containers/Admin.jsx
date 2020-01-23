import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { ROUTES } from "../constants";

const Admin = ({ uiStore }) => {
  return (
    <>
      <h1>Admin </h1>
      <p>Kies uw taal / choisissez votre langue</p>
      <Button
        variant={uiStore.adminLanguage === "nl" ? "contained" : ""}
        onClick={() => uiStore.setAdminLanguage("nl")}
      >
        NL
      </Button>
      <Button
        variant={uiStore.adminLanguage === "fr" ? "contained" : ""}
        onClick={() => uiStore.setAdminLanguage("fr")}
      >
        FR
      </Button>
      <br />

      {uiStore.adminLanguage !== "" ? (
        <Link to={ROUTES.setup}>
          <Button variant="contained">
            {uiStore.adminLanguage === "nl"
              ? "installatie instellen"
              : "instellez la machine"}
          </Button>
        </Link>
      ) : null}
    </>
  );
};

Admin.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Admin));

import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";

const SetupUserLanguage = ({ uiStore }) => {
  if (uiStore.adminLanguage === "nl") {
    return (
      <section>
        <h2>Kies de taal voor de gebruiker</h2>
        <p>Deze kan op elk moment nog gewijzigd worden</p>
        <Button
          variant={uiStore.userLanguage === "nl" ? "contained" : "text"}
          onClick={() => uiStore.setUserLanguage("nl")}
        >
          NL
        </Button>
        <Button
          variant={uiStore.userLanguage === "fr" ? "contained" : "text"}
          onClick={() => uiStore.setUserLanguage("fr")}
        >
          FR
        </Button>
      </section>
    );
  } else {
    return (
      <section>
        <h2>Choisissez la langue pour l'utilisateur</h2>
        <p>Cela peut être modifié à tout moment </p>
        <Button
          variant={uiStore.userLanguage === "nl" ? "contained" : "text"}
          onClick={() => uiStore.setUserLanguage("nl")}
        >
          NL
        </Button>
        <Button
          variant={uiStore.userLanguage === "fr" ? "contained" : "text"}
          onClick={() => uiStore.setUserLanguage("fr")}
        >
          FR
        </Button>
      </section>
    );
  }
};

export default inject("uiStore")(observer(SetupUserLanguage));

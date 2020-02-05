import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";

const SetupUserLanguage = ({ uiStore }) => {
  if (uiStore.adminLanguage === "nl") {
    return (
      <section>
        <h2>Kies de standaardtaal van de gebruiker</h2>
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
        <p>
          Deze taal kan op ieder moment aangepast worden door de gebruiker
          tijdens het gebruik van de installatie.
        </p>
      </section>
    );
  } else {
    return (
      <section>
        <h2>Choisissez la langue par défaut de l'utilisateur</h2>
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
        <p>
          Cette langue peut être modifiée à tout moment par l'utilisateur
          pendant l'utilisation de l'installation.
        </p>
      </section>
    );
  }
};

export default inject("uiStore")(observer(SetupUserLanguage));

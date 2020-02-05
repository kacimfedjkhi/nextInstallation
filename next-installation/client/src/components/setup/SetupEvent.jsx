import React from "react";
import { inject, observer } from "mobx-react";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SetupEvent = ({ uiStore }) => {
  return (
    <section>
      <FormControlLabel
        control={
          <Checkbox
            onChange={e => uiStore.toggleCheckedEvent(e)}
            value="checkedA"
          />
        }
        label={
          uiStore.adminLanguage === "nl" ? content.nl.event : content.fr.event
        }
      />
      <p>
        {uiStore.adminLanguage === "nl"
          ? content.nl.eventTxt
          : content.fr.eventTxt}
      </p>
      {uiStore.event ? (
        <>
          <p>
            {uiStore.adminLanguage === "nl"
              ? content.nl.eventName
              : content.fr.eventName}
          </p>
          <TextField
            label={
              uiStore.adminLanguage === "nl"
                ? content.nl.eventNameLabel
                : content.fr.eventNameLabel
            }
            margin="normal"
            variant="outlined"
            style={{ width: 300 }}
            onChange={e => uiStore.addEventName(e.currentTarget.value)}
          />
        </>
      ) : null}
    </section>
  );
};

const content = {
  nl: {
    event: "er is momenteel een event gaande op deze locatie",
    eventTxt:
      "Op deze manier krijgt de gebruiker meer informatie over het evenement waar zijn of haar kaartje zich bevindt.",
    eventName: "Voer hieronder de naam van het evenement in",
    eventNameLabel: "Eventnaam"
  },
  fr: {
    event: "Il y a actuellement un événement à cet endroit",
    eventTxt:
      "Il est ainsi possible de montrer plus en détail où les cartes postales sont localisés.",
    eventName: "Saisissez le nom de l'événement ci-dessous",
    eventNameLabel: "Nom d'evenement"
  }
};

export default inject("uiStore")(observer(SetupEvent));

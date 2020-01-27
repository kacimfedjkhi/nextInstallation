import React from "react";
import { inject, observer } from "mobx-react";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SetupEvent = ({ uiStore }) => {
  if (uiStore.adminLanguage === "nl") {
    return (
      <section>
        <FormControlLabel
          control={
            <Checkbox
              onChange={e => uiStore.toggleCheckedEvent(e)}
              value="checkedA"
            />
          }
          label="Er is momenteel een evenement gaande op deze locatie"
        />
        <p>
          Op deze manier kan gedetailleerder weergegeven worden waar de kaartjes
          zich bevinden.
        </p>
        {uiStore.event ? (
          <>
            <p>Voer de naam van het evenement in</p>
            <TextField
              label="Naam event"
              margin="normal"
              variant="outlined"
              style={{ width: 300 }}
              onChange={e => uiStore.addEventName(e.currentTarget.value)}
            />
          </>
        ) : null}
      </section>
    );
  } else {
    return (
      <section>
        <FormControlLabel
          control={
            <Checkbox
              onChange={e => uiStore.toggleCheckedEvent(e)}
              value="event"
            />
          }
          label="
          Il y a actuellement un événement à cet endroit"
        />
        <p>
          Il est ainsi possible de montrer plus en détail où les cartes postales
          sont localisés.
        </p>
        {uiStore.event ? (
          <>
            <p>Inserez le nom d'événement</p>
            <TextField
              label="Nom d'événement"
              margin="normal"
              variant="outlined"
              style={{ width: 300 }}
              onChange={e => uiStore.addEventName(e.currentTarget.value)}
            />
          </>
        ) : null}
      </section>
    );
  }
};

export default inject("uiStore")(observer(SetupEvent));

import React from "react";
import { inject, observer } from "mobx-react";

import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

const SetupEvent = ({ uiStore }) => {
  return (
    <section>
      <Label htmlFor="event">
        <input
          name="event"
          id="event"
          type="checkbox"
          onChange={uiStore.toggleCheckedEvent}
        />
        {uiStore.adminLanguage === "nl" ? content.nl.event : content.fr.event}
      </Label>

      {uiStore.event ? (
        <>
          <EventTxt>
            {uiStore.adminLanguage === "nl"
              ? content.nl.eventName
              : content.fr.eventName}
          </EventTxt>
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
      ) : (
        <EventTxt>
          {uiStore.adminLanguage === "nl"
            ? content.nl.eventTxt
            : content.fr.eventTxt}
        </EventTxt>
      )}
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

const EventTxt = styled.p`
  font-size: 2rem;
  max-width: 40rem;
  color: #bababa;
  font-weight: 600;
  padding-top: 1rem;
`;

const Label = styled.label`
  font-size: 2.5rem;
  color: #8089ce;
  font-weight: 600;
`;

export default inject("uiStore")(observer(SetupEvent));

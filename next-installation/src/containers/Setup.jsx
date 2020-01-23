import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ROUTES } from "../constants";

const Setup = ({ uiStore }) => {
  return (
    <>
      <h1>Installation setup</h1>
      <section>
        <h2>Kies de taal voor de gebruiker</h2>
        <p>Deze kan op elk moment nog gewijzigd worden</p>
        <Button
          variant={uiStore.userLanguage === "nl" ? "contained" : ""}
          onClick={() => uiStore.setUserLanguage("nl")}
        >
          NL
        </Button>
        <Button
          variant={uiStore.userLanguage === "fr" ? "contained" : ""}
          onClick={() => uiStore.setUserLanguage("fr")}
        >
          FR
        </Button>
      </section>
      <section>Waar staat deze installatie?</section>
      <section>
        <Button onClick={() => uiStore.changeLocationType("cultuurhuis")}>
          Cultuurhuis
        </Button>
        <Button onClick={() => uiStore.changeLocationType("openbaar")}>
          Openbare plaats
        </Button>
        {uiStore.locationType === "cultuurhuis" ? (
          <>
            <p>Voer de naam van een cultuurhuis in</p>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={houses}
              onChange={(event, value) => uiStore.handleChangeLocation(value)}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Cultuurhuis"
                  margin="normal"
                  variant="outlined"
                  style={{ width: 300 }}
                  onChange={e =>
                    uiStore.handleChangeLocation(e.currentTarget.value)
                  }
                />
              )}
            />
          </>
        ) : (
          <>
            <p>Geef de locatie van de installatie op</p>
            <TextField
              label="Openbare plaats"
              margin="normal"
              variant="outlined"
              style={{ width: 300 }}
              onChange={e =>
                uiStore.handleChangeLocation(e.currentTarget.value)
              }
            />
          </>
        )}
      </section>
      <section>
        <FormControlLabel
          control={
            <Checkbox
              onChange={e => uiStore.toggleCheckedEvent(e)}
              value="checkedA"
            />
          }
          label="Er is momenteel een event gaande op deze locatie"
        />
        <p>
          Op deze manier kan gedetailleerder weergegeven worden waar de kaartjes
          zich bevinden.
        </p>
        {uiStore.event ? (
          <TextField
            label="Naam event"
            margin="normal"
            variant="outlined"
            style={{ width: 300 }}
            onChange={e => uiStore.addEventName(e.currentTarget.value)}
          />
        ) : null}
      </section>
      <Link to={ROUTES.home}>
        <Button variant="contained">Starten</Button>
      </Link>
    </>
  );
};

const houses = [
  "CC De Schakel Wevelgem",
  "CC De Steiger Menen",
  "CC Guldenberg Wevelgem",
  "CC Het Perron Ieper",
  "CC Het Spoor Harelbeke",
  "La Maison de la Culture d’Amiens",
  "Le Bateau Feu Dunkerque",
  "Le Grand Bleu Lille",
  "Le Gymnasse CDCN Roubaix",
  "Le théâtre du Nord Lille",
  "Le Vivat Armentières",
  "Le Théâtre du Beauvaisis",
  "Malpertuis Tielt",
  "Musée LaM Villeneuve d’Ascq",
  "Opéra de Lille",
  "Wilde Westen Kortrijk"
];

Setup.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Setup));

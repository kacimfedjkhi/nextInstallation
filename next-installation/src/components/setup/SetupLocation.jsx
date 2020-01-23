import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const SetupLocation = ({ uiStore }) => {
  if (uiStore.adminLanguage === "nl") {
    return (
      <section>
        <Button
          variant={
            uiStore.locationType === "cultuurhuis" ? "contained" : "text"
          }
          onClick={() => uiStore.changeLocationType("cultuurhuis")}
        >
          Cultuurhuis
        </Button>
        <Button
          variant={uiStore.locationType === "openbaar" ? "contained" : "text"}
          onClick={() => uiStore.changeLocationType("openbaar")}
        >
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
    );
  } else {
    return (
      <section>
        <Button
          variant={
            uiStore.locationType === "cultuurhuis" ? "contained" : "text"
          }
          onClick={() => uiStore.changeLocationType("cultuurhuis")}
        >
          centre culturel
        </Button>
        <Button
          variant={uiStore.locationType === "openbaar" ? "contained" : "text"}
          onClick={() => uiStore.changeLocationType("openbaar")}
        >
          place public
        </Button>
        {uiStore.locationType === "cultuurhuis" ? (
          <>
            <p>Inserez le nom du centre culturel</p>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={houses}
              onChange={(event, value) => uiStore.handleChangeLocation(value)}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Centre culturel"
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
            <p>Inserez la place d'installation</p>
            <TextField
              label="Place public"
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
    );
  }
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

export default inject("uiStore")(observer(SetupLocation));

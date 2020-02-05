import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const SetupLocation = ({ uiStore }) => {
  return (
    <>
      <section>
        {uiStore.adminLanguage === "nl" ? (
          <h2>
            <span>waar</span>staat deze isntallatie?
          </h2>
        ) : (
          <h2>
            <span>Où</span> se trouve cette installation ?
          </h2>
        )}
        <p>
          {uiStore.adminLanguage === "nl"
            ? content.nl.installationTxt
            : content.fr.installationTxt}
        </p>
      </section>
      <section>
        <Button
          variant={uiStore.locationType === "culture" ? "contained" : "text"}
          onClick={() => uiStore.changeLocationType("culture")}
        >
          {uiStore.adminLanguage === "nl"
            ? content.nl.locationTypeCulture
            : content.fr.locationTypeCulture}
        </Button>
        <Button
          variant={uiStore.locationType === "openbaar" ? "contained" : "text"}
          onClick={() => uiStore.changeLocationType("public")}
        >
          Openbare plaats
        </Button>
        {uiStore.locationType === "culture" ? (
          <>
            <p>
              {uiStore.adminLanguage === "nl"
                ? content.nl.culturehouseLocation
                : content.fr.culturehouseLocation}
            </p>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={houses}
              onChange={(event, value) => uiStore.handleChangeLocation(value)}
              renderInput={params => (
                <TextField
                  {...params}
                  label={
                    uiStore.adminLanguage === "nl"
                      ? content.nl.locationTypeCulture
                      : content.fr.locationTypeCulture
                  }
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
            <p>
              {uiStore.adminLanguage === "nl"
                ? content.nl.publicLocation
                : content.fr.publicLocation}
            </p>
            <TextField
              label={
                uiStore.adminLanguage === "nl"
                  ? content.nl.locationTypePublic
                  : content.fr.locationTypePublic
              }
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
    </>
  );
};

const content = {
  nl: {
    installationTxt:
      "Vul deze gegevens zo volledig mogelijk in om de gebruiker voldoende informatie te bezorgen.",
    locationTypeCulture: "Cultuurhuis",
    culturehouseLocation: "Voer de naam van een cultuurhuis in.",
    locationTypePublic: "openbare plaats",
    publicLocation: "Voer de naam van uw locatie in."
  },
  fr: {
    installationTxt:
      "Remplissez ces données aussi complètement que possible afin de fournir à l'utilisateur des informations suffisantes.",
    locationTypeCulture: "maison de la culture",
    culturehouseLocation: "Entrez le nom d'une maison de la culture.",
    locationTypePublic: "place public",
    publicLocation: "Entrez le nom de votre location."
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

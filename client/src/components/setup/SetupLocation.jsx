import React from "react";
import { inject, observer } from "mobx-react";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import SetupEvent from "./SetupEvent";

import styled from "styled-components";
import languageDivider from "../../assets/img/languageDivider_s.png";
import activeLocationBtn from "../../assets/img/activeLocationBtn.png";
import locationBtn from "../../assets/img/locationBtn.png";

const SetupLocation = ({ uiStore }) => {
  return (
    <LocationContainer>
      <section>
        {uiStore.adminLanguage === "nl" ? (
          <Title>
            <span>waar</span> staat deze installatie?
          </Title>
        ) : (
          <Title>
            <span>Où</span> se trouve cette installation ?
          </Title>
        )}
        <LocationTxt>
          {uiStore.adminLanguage === "nl"
            ? content.nl.installationTxt
            : content.fr.installationTxt}
        </LocationTxt>
      </section>
      <InputWrapper>
        <section>
          <LocationBtn
            img={
              uiStore.locationType === "culture"
                ? activeLocationBtn
                : locationBtn
            }
            onClick={() => uiStore.changeLocationType("culture")}
          >
            {uiStore.adminLanguage === "nl"
              ? content.nl.locationTypeCulture
              : content.fr.locationTypeCulture}
          </LocationBtn>
          <LocationBtn
            img={
              uiStore.locationType === "public"
                ? activeLocationBtn
                : locationBtn
            }
            onClick={() => uiStore.changeLocationType("public")}
          >
            Openbare plaats
          </LocationBtn>
          {uiStore.locationType === "culture" ? (
            <>
              <InputLabel>
                {uiStore.adminLanguage === "nl"
                  ? content.nl.culturehouseLocation
                  : content.fr.culturehouseLocation}
              </InputLabel>
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
              <InputLabel>
                {uiStore.adminLanguage === "nl"
                  ? content.nl.publicLocation
                  : content.fr.publicLocation}
              </InputLabel>
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
        <img src={languageDivider} width="40" alt="language divider" />

        <SetupEvent />
      </InputWrapper>
    </LocationContainer>
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

const LocationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocationTxt = styled.p`
  font-size: 2rem;
  max-width: 50rem;
  font-weight: 600;
  line-height: 2rem;
  color: #bababa;

  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #8089ce;
  font-size: 4rem;
  max-width: 60rem;
  padding: 2rem 0;
  text-align: center;

  && span {
    color: #4e5587;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  padding: 5rem 0;
`;

const LocationBtn = styled.button`
  border: none;

  background-image: url(${props => props.img});
  background-size: cover;
  background-color: transparent;
  width: 25rem;
  height: 5rem;

  color: white;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 2rem;

  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }
`;

const InputLabel = styled.p`
  font-size: 2rem;
  color: #bababa;
  font-weight: 600;
`;

export default inject("uiStore")(observer(SetupLocation));

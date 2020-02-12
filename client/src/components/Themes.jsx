import React from "react";
import { inject, observer } from "mobx-react";

import UIStore from "../store/UIStore";
import styled from "styled-components";

import actualiteit from "../assets/img/themes/actualiteit.png";
import actualite from "../assets/img/themes/actualite.png";
import actualiteitSelected from "../assets/img/themes/actualiteit_selected.png";
import actualiteSelected from "../assets/img/themes/actualite_selected.png";

import kunst from "../assets/img/themes/kunst.png";
import art from "../assets/img/themes/art.png";
import kunstSelected from "../assets/img/themes/kunst_selected.png";
import artSelected from "../assets/img/themes/art_selected.png";

import culinair from "../assets/img/themes/culinair.png";
import culinaire from "../assets/img/themes/culinaire.png";
import culinairSelected from "../assets/img/themes/culinair_selected.png";
import culinaireSelected from "../assets/img/themes/culinaire_selected.png";

import natuur from "../assets/img/themes/natuur.png";
import nature from "../assets/img/themes/nature.png";
import natuurSelected from "../assets/img/themes/natuur_selected.png";
import natureSelected from "../assets/img/themes/nature_selected.png";

import toerisme from "../assets/img/themes/toerisme.png";
import tourisme from "../assets/img/themes/tourisme.png";
import toerismeSelected from "../assets/img/themes/toerisme_selected.png";
import tourismeSelected from "../assets/img/themes/tourisme_selected.png";

import technologie from "../assets/img/themes/technologie.png";
import technologieSelected from "../assets/img/themes/technologie_selected.png";

const ThemesList = ({ writeStore, uiStore }) => {
  const themes = [
    {
      nl: [kunst, kunstSelected],
      fr: [art, artSelected],
      en: "art"
    },
    {
      nl: [culinair, culinairSelected],
      fr: [culinaire, culinaireSelected],
      en: "culinary"
    },
    {
      nl: [actualiteit, actualiteitSelected],
      fr: [actualite, actualiteSelected],
      en: "news"
    },
    {
      nl: [technologie, technologieSelected],
      fr: [technologie, technologieSelected],
      en: "technology"
    },
    {
      nl: [natuur, natuurSelected],
      fr: [nature, natuurSelected],
      en: "nature"
    },
    {
      nl: [toerisme, toerismeSelected],
      fr: [tourisme, tourismeSelected],
      en: "tourism"
    }
  ];

  return (
    <ButtonList>
      {themes.map(theme => (
        <ThemeButton
          img={writeStore.theme === theme.en ? theme.nl[1] : theme.nl[0]}
          key={theme.en}
          onClick={() => writeStore.handleClickTheme(theme.en)}
        ></ThemeButton>
      ))}
    </ButtonList>
  );
};

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 57rem;
`;

const ThemeButton = styled.button`
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  width: 18rem;
  height: 11rem;
  margin-bottom: 3rem;

  &:focus {
    outline: none;
  }
`;

export default inject(`writeStore`, `uiStore`)(observer(ThemesList));

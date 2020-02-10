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
  const handleClickTheme = e => {
    writeStore.theme = e;
  };

  // const getImg = theme => {
  //   let img;

  //   if (uiStore.userLanguage === "nl") {
  //     theme.en === writeStore.theme
  //       ? (img = `../assets/img/themes/${theme.nl}_selected.png`)
  //       : (img = theme.nl);
  //   } else {
  //     theme.en === writeStore.theme
  //       ? (img = `${theme.fr}Selected`)
  //       : (img = theme.nl);
  //   }

  //   console.log(img);

  //   return img;
  // };

  const themes = [
    {
      nl: kunst,
      fr: art,
      en: "art"
    },
    {
      nl: culinair,
      fr: culinaire,
      en: "culinary"
    },
    {
      nl: actualiteit,
      fr: actualite,
      en: "news"
    },
    {
      nl: technologie,
      fr: technologie,
      en: "technology"
    },
    {
      nl: natuur,
      fr: nature,
      en: "nature"
    },
    {
      nl: toerisme,
      fr: tourisme,
      en: "tourism"
    }
  ];

  return (
    <ButtonList>
      {themes.map(theme => (
        <ThemeButton
          img={uiStore.userLanguage === "nl" ? theme.nl : theme.fr}
          key={theme.en}
          onClick={() => handleClickTheme(theme.en)}
        ></ThemeButton>
      ))}
    </ButtonList>
  );
};

const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 60rem;
`;

const ThemeButton = styled.button`
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  width: 18rem;
  height: 11rem;
  margin-bottom: 4rem;

  &:focus {
    outline: none;
  }
`;

export default inject(`writeStore`, `uiStore`)(observer(ThemesList));

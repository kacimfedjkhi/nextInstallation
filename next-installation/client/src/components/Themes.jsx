import React from "react";
import { inject, observer } from "mobx-react";

import UIStore from "../store/UIStore";
import styled from "styled-components";

const ThemesList = ({ writeStore, uiStore }) => {
  const handleClickTheme = e => {
    writeStore.theme = e;
  };

  const themes = [
    {
      nl: "kunst",
      fr: "art",
      en: "art"
    },
    {
      nl: "culinair",
      fr: "culinaire",
      en: "culinary"
    },
    {
      nl: "actualiteit",
      fr: "actualite",
      en: "news"
    },
    {
      nl: "technologie",
      fr: "technologie",
      en: "technology"
    },
    {
      nl: "natuur",
      fr: "nature",
      en: "nature"
    },
    {
      nl: "toerisme",
      fr: "tourisme",
      en: "tourism"
    }
  ];

  return (
    <>
      {themes.map(theme => (
        <ThemeButton
          img={uiStore.userLanguage === "nl" ? theme.nl : theme.fr}
          key={theme}
          onClick={() => handleClickTheme(theme.en)}
        >
          <p>{uiStore.userLanguage === "nl" ? theme.nl : theme.fr}</p>
        </ThemeButton>
      ))}
    </>
  );
};

const ThemeButton = styled.button`
  background-image: url("${props => props.img}.png");
  background-color: transparent;
  border: none;
  width: 15rem;
  height: 10rem;
`;

export default inject(`writeStore`, `uiStore`)(observer(ThemesList));

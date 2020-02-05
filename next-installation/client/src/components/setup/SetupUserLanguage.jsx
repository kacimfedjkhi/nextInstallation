import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";

import styled from "styled-components";
import languageBtn from "../../assets/img/languageBtn.png";
import activeLanguageBtn from "../../assets/img/activeLanguageBtn.png";
import languageDivider from "../../assets/img/languageDivider_s.png";

const SetupUserLanguage = ({ uiStore }) => {
  return (
    <setUserLanguageContainer>
      {uiStore.adminLanguage === "nl" ? (
        <Title>
          Kies de standaardtaal van de <span>gebruiker</span>
        </Title>
      ) : (
        <Title>
          Choisissez la langue par défaut de <span>l'utilisateur</span>
        </Title>
      )}
      <ButtonWrapper>
        <LanguageBtn
          img={uiStore.userLanguage === "nl" ? activeLanguageBtn : languageBtn}
          onClick={() => uiStore.setUserLanguage("nl")}
        >
          NL
        </LanguageBtn>
        <img src={languageDivider} width="40" alt="language divider" />

        <LanguageBtn
          img={uiStore.userLanguage === "fr" ? activeLanguageBtn : languageBtn}
          onClick={() => uiStore.setUserLanguage("fr")}
        >
          FR
        </LanguageBtn>
      </ButtonWrapper>

      <LanguageTxt>
        Deze taal kan op ieder moment aangepast worden door de gebruiker tijdens
        het gebruik van de installatie.
      </LanguageTxt>
    </setUserLanguageContainer>
  );
};

const setUserLanguageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const LanguageBtn = styled.button`
  border: none;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 20rem;

  font-family: "Aracne";
  font-size: 10rem;
  color: white;

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem 0 2rem 0;
`;

const LanguageTxt = styled.p`
  font-size: 1.6rem;
  max-width: 50rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: center;
  color: #bababa;
  margin: 0 auto;
`;

export default inject("uiStore")(observer(SetupUserLanguage));

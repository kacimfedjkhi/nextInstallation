import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { ROUTES } from "../constants";

import backgroundImage from "../assets/img/adminBg.jpg";
import languageBtn from "../assets/img/languageBtn.png";
import activeLanguageBtn from "../assets/img/activeLanguageBtn.png";
import languageDivider from "../assets/img/languageDivider.png";
import configurationButton from "../assets/img/configurationButton.png";
import nextArrow from "../assets/img/arrowRight.png";

const Admin = ({ uiStore }) => {
  return (
    <StyledPage>
      <div>
        <StyledTitle>
          Kies uw taal <br />{" "}
          <StyledTitleSpan>choisissez votre langue</StyledTitleSpan>
        </StyledTitle>
        <LanguageContainer>
          <DutchOption>
            <LanguageBtn
              img={
                uiStore.adminLanguage === "nl" ? activeLanguageBtn : languageBtn
              }
              onClick={() => uiStore.setAdminLanguage("nl")}
            >
              NL
            </LanguageBtn>
            <div>
              <LanguageTitle
                color={uiStore.adminLanguage === "nl" ? "#8089ce" : "#bababa"}
              >
                Nederlands
              </LanguageTitle>
              <LanguageTxt
                color={uiStore.adminLanguage === "nl" ? "#8089ce" : "#bababa"}
              >
                Deze taal stelt u in om de installatie op te starten en heeft
                geen verdere invloed op de installatie zelf.
              </LanguageTxt>
            </div>
          </DutchOption>
          <img src={languageDivider} width="60" alt="language divider" />
          <FrenchOption>
            <LanguageBtn
              img={
                uiStore.adminLanguage === "fr" ? activeLanguageBtn : languageBtn
              }
              onClick={() => uiStore.setAdminLanguage("fr")}
            >
              FR
            </LanguageBtn>
            <div>
              <LanguageTitle
                color={uiStore.adminLanguage === "fr" ? "#8089ce" : "#bababa"}
              >
                français
              </LanguageTitle>
              <LanguageTxt
                color={uiStore.adminLanguage === "fr" ? "#8089ce" : "#bababa"}
              >
                Vous définissez cette langue pour l'installation pour démarrer
                et n'a pas plus influence sur l'installation elle-même.
              </LanguageTxt>
            </div>
          </FrenchOption>
        </LanguageContainer>
        <br />

        {uiStore.adminLanguage !== "" ? (
          <Link to={ROUTES.setup}>
            <ConfigurationBtn>
              {uiStore.adminLanguage === "nl"
                ? content.nl.startBtn
                : content.fr.startBtn}

              <img src={nextArrow} width="35" alt="language divider" />
            </ConfigurationBtn>
          </Link>
        ) : null}
      </div>
    </StyledPage>
  );
};

const content = {
  nl: {
    startBtn: "Installatie verder configureren"
  },
  fr: {
    startBtn: "Configurer davantage l'installation"
  }
};

const StyledPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #8089ce;
  text-align: center;
  margin-bottom: 5rem;
`;

const StyledTitleSpan = styled.span`
  color: #4e5587;
`;

const LanguageBtn = styled.button`
  border: none;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  width: 20rem;

  font-family: "Aracne";
  font-size: 11.5rem;
  color: white;

  &:focus {
    outline: none;
  }
`;

const LanguageContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding: 5rem 0;
`;

const LanguageTitle = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  color: #bababa;
  font-size: 2rem;
  padding: 2rem 0;
  color: ${props => props.color};
`;

const LanguageTxt = styled.p`
  font-size: 1.6rem;
  max-width: 31rem;
  font-weight: 600;
  line-height: 2rem;
  color: ${props => props.color};
`;

const DutchOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  && div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2.5rem;
  }

  ${LanguageTxt} {
    text-align: right;
  }
`;

const FrenchOption = styled.div`
  padding-left: 2.5rem;
`;

const ConfigurationBtn = styled.button`
  background-image: url(${configurationButton});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  width: 55rem;
  height: 8rem;

  font-size: 2.5rem;
  color: white;
  font-family: "Nunito";
  font-weight: bold;

  transform: translateX(25%);

  &:focus {
    outline: none;
    transform: scale(0.95) translateX(25%);
  }

  && img {
    margin-left: 1rem;
  }
`;

Admin.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Admin));

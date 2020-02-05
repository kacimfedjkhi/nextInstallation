import React, { useState } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { ROUTES } from "../constants";
import SetupLocation from "../components/setup/SetupLocation";
import SetupUserLanguage from "../components/setup/SetupUserLanguage";

import backgroundImage from "../assets/img/adminBg.jpg";
import configurationButton from "../assets/img/configurationButton.png";
import nextArrow from "../assets/img/arrowRight.png";

const Setup = ({ uiStore }) => {
  const [count, setCount] = useState(0);

  const handleClickSetup = () => {
    setCount(count + 1);
  };
  return (
    <StyledPage>
      {count === 0 ? <SetupUserLanguage /> : null}
      {count === 1 ? (
        <>
          <SetupLocation />
        </>
      ) : null}

      {count === 1 ? (
        <Link to={ROUTES.home}>
          <ConfigurationBtn onClick={handleClickSetup}>
            {uiStore.adminLanguage === "nl"
              ? content.nl.startBtn
              : content.fr.startBtn}

            <img src={nextArrow} width="35" alt="next arrow" />
          </ConfigurationBtn>
        </Link>
      ) : (
        <ConfigurationBtn onClick={handleClickSetup}>
          {uiStore.adminLanguage === "nl"
            ? content.nl.btnTxt
            : content.fr.btnTxt}

          <img src={nextArrow} width="35" alt="next arrow" />
        </ConfigurationBtn>
      )}
    </StyledPage>
  );
};

const content = {
  nl: {
    btnTxt: "De installatie verder configureren",
    startBtn: "De installatie opstarten"
  },
  fr: {
    btnTxt: "Configurer davantage l'installation",
    startBtn: "Mise en service de l'installation"
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
  flex-direction: column;
`;

const ConfigurationBtn = styled.button`
  background-image: url(${configurationButton});
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
  width: 60rem;
  height: 9rem;

  margin-top: 5rem;

  font-size: 2.5rem;
  color: white;
  font-family: "Nunito";
  font-weight: bold;

  &:focus {
    outline: none;
    transform: scale(0.95);
  }

  && img {
    margin-left: 1rem;
  }
`;

Setup.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Setup));

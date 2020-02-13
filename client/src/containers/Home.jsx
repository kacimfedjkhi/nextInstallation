import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";

import styled from "styled-components";
import backgroundImage from "../assets/img/choiceBg.png";

import startWrite_nl from "../assets/img/gifs/startWrite_nl.gif";
import startWrite_fr from "../assets/img/gifs/startWrite_fr.gif";
import startOpen_nl from "../assets/img/gifs/startOpen_nl.gif";
import startOpen_fr from "../assets/img/gifs/startOpen_fr.gif";

const Home = ({ uiStore }) => {
  const handleSetAction = e => {
    uiStore.selectedAction = e;
  };

  return (
    <StyledPage>
      <Link to={ROUTES.onboarding}>
        <Button
          img={uiStore.userLanguage === "nl" ? startWrite_nl : startWrite_fr}
          onClick={() => handleSetAction("write")}
        ></Button>
      </Link>
      <Link to={ROUTES.onboarding}>
        <Button
          img={uiStore.userLanguage === "nl" ? startOpen_nl : startOpen_fr}
          onClick={() => handleSetAction("open")}
        ></Button>
      </Link>
      <Choice>Maak je keuze en deel je kennis!</Choice>
    </StyledPage>
  );
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

const Button = styled.button`
  height: 100vw;
  width: 50vw;
  border: none;
  background-color: transparent;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

const Choice = styled.p`
  position: absolute;
  bottom: 10rem;
  color: #7e88cb;
  font-size: 2rem;
  font-weight: bold;
`;

export default inject(`uiStore`)(observer(Home));

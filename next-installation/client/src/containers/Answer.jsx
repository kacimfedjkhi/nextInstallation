import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import Card from "../components/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Keyboard from "../components/KeyboardInput";

import styled from "styled-components";
import backgroundImage from "../assets/img/onboardingBg.jpg";
import envelope from "../assets/img/openEnvelope.png";
import turqoiseBtn from "../assets/img/turqoiseBtn_s_dark.png";
import lightBtn from "../assets/img/lightBtn_s.png";
import themeImgNl from "../assets/img/themeMessageBubble_nl.png";
import themeImgFr from "../assets/img/themeMessageBubble_fr.png";

const Answer = ({ openStore, writeStore, uiStore }) => {
  const card = openStore.showCard();

  const handleClickAnswer = () => {
    console.log("kakwofd");

    openStore.answer = true;
  };

  const handleAnswerCard = () => {
    console.log("answer");
    openStore.answerCard(card.id);
  };

  return (
    <StyledPage>
      <ThemeBalloon>
        <img
          src={uiStore.userLanguage === "nl" ? themeImgNl : themeImgFr}
          width="400"
          alt="Textballoon with theme "
        />
        <p>"{card.theme}"</p>
      </ThemeBalloon>
      <CardWrapper>
        <Card
          isFlipped={writeStore.cardFlipped}
          theme={card.theme}
          message={card.text}
          answers={card.answers}
          locations={card.locations}
          locationCreated={card.locationCreated}
          writeStore={writeStore}
          openStore={openStore}
        />
      </CardWrapper>
      <Buttons>
        {!openStore.answer ? (
          <>
            <AnswerBtn onClick={handleClickAnswer}>
              Dit kaartje beantwoorden
            </AnswerBtn>
            <Link to={ROUTES.open}>
              <ThrowbackBtn>Dit kaartje terug gooien</ThrowbackBtn>
            </Link>
          </>
        ) : null}
      </Buttons>
      <Button onClick={handleAnswerCard}>Klaar</Button>
      {openStore.answer ? <Keyboard store={openStore} /> : null}
    </StyledPage>
  );
};

const StyledPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;

  &:before {
    content: "";
    display: block;
    width: 88rem;
    height: 80rem;
    background-image: url(${envelope});
    background-size: contain;
    background-repeat: no-repeat;
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;

const CardWrapper = styled.div`
  transform: translateX(26rem);
`;

const Buttons = styled.div`
  position: absolute;
  top: 45%;
  left: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AnswerBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${turqoiseBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30rem;
  height: 6rem;

  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: bold;
  margin-bottom: 1rem;

  &:focus {
    transform: scale(0.95);
    outline: none;
  }
`;

const ThrowbackBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${lightBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 27rem;
  height: 5rem;

  color: #4da0a4;
  text-align: center;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: bold;

  &:focus {
    transform: scale(0.95);
    outline: none;
  }
`;

const ThemeBalloon = styled.div`
  position: absolute;
  left: 30rem;
  top: 5rem;

  z-index: 99;

  & p {
    font-family: "Nunito";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 4rem;
    color: #a7e2e5;
    text-align: center;

    position: relative;
    bottom: 16rem;

    transform: rotate(-10deg);
  }
`;

Answer.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(`openStore`, `writeStore`, `uiStore`)(observer(Answer));

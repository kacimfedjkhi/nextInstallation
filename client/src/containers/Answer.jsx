import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import Card from "../components/Card";
import { withRouter } from "react-router-dom";
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
import nextArrow from "../assets/img/nextArrow.png";
import prevArrowOpen from "../assets/img/prevArrow_turqoise.png";

const Answer = ({ openStore, writeStore, uiStore, history }) => {
  const card = openStore.showCard();

  const handleClickAnswer = () => {
    openStore.answer = true;
  };

  const handleAnswerCard = () => {
    openStore.answerCard(card.id);
    openStore.message = "";
    history.push(ROUTES.answered);
  };

  return (
    <StyledPage>
      {!openStore.answer ? (
        <ThemeBalloon>
          <img
            src={uiStore.userLanguage === "nl" ? themeImgNl : themeImgFr}
            width="400"
            alt="Textballoon with theme "
          />
          <p>"{card.theme}"</p>
        </ThemeBalloon>
      ) : null}
      <CardWrapper translate={openStore.answer ? "0" : "26"}>
        <Card
          isFlipped={writeStore.cardFlipped}
          theme={card.theme}
          message={card.text}
          answers={card.answers}
          image={card.image}
          locations={card.locations}
          locationCreated={card.locationCreated}
          writeStore={writeStore}
          openStore={openStore}
        />
      </CardWrapper>
      <Buttons>
        <LocationAmount>
          {card.answers.length > 0 ? (
            <>
              Dit kaartje werd al op
              <br /> <span>{card.answers.length} andere locaties</span>{" "}
              beantwoord.
            </>
          ) : (
            <>
              Beantwoord als eerste dit kaartje
              <br /> en deel je kennis!
            </>
          )}
        </LocationAmount>
        {!openStore.answer ? (
          <>
            <AnswerBtn onClick={handleClickAnswer}>
              <span>Dit kaartje beantwoorden</span>
              <img src={nextArrow} width="30" alt="previous step arrow" />
            </AnswerBtn>
            <Link to={ROUTES.open}>
              <ThrowbackBtn>
                <img src={prevArrowOpen} width="30" alt="previous step arrow" />
                <span>Dit kaartje teruggooien</span>
              </ThrowbackBtn>
            </Link>
          </>
        ) : null}
      </Buttons>
      {openStore.answer ? (
        <>
          <Keyboard store={openStore} />
          {openStore.message !== "" ? (
            <DoneBtn onClick={handleAnswerCard}>
              <span>Mijn antwoord toevoegen</span>
              <img src={nextArrow} width="30" alt="previous step arrow" />
            </DoneBtn>
          ) : null}
        </>
      ) : null}
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
  transition: 0.3s ease-in-out;
  transform: translateX(${props => props.translate}rem);
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnswerBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${turqoiseBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 35rem;
  height: 6.5rem;

  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: bold;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 1rem;
  }

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
  width: 32rem;
  height: 6rem;

  color: #4da0a4;
  text-align: center;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-left: 1rem;
  }

  &:focus {
    transform: scale(0.95);
    outline: none;
  }
`;

const ThemeBalloon = styled.div`
  position: absolute;
  left: 33rem;
  top: 15rem;

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

const DoneBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${turqoiseBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 35rem;
  height: 6.5rem;

  position: fixed;
  bottom: 5rem;
  right: 5rem;

  color: white;
  text-align: center;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: bold;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 1rem;
  }

  &:focus {
    transform: scale(0.95);
    outline: none;
  }

  :disabled {
    opacity: 0.4;
  }
`;

const LocationAmount = styled.p`
  color: white;
  font-family: "Nunito";
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 4rem;

  & span {
    font-weight: bold;
  }
`;

Answer.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(
  `openStore`,
  `writeStore`,
  `uiStore`
)(withRouter(observer(Answer)));

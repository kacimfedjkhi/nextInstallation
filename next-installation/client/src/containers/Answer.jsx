import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import Card from "../components/Card";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Keyboard from "../components/KeyboardInput";

const Answer = ({ openStore, writeStore }) => {
  const card = openStore.showCard();

  const handleClickAnswer = () => {
    console.log("kakwofd");

    openStore.answer = true;
  };

  const handleAnswerCard = () => {
    console.log("answer");
  };

  return (
    <>
      <h1>Dit is jou gekozen kaartje binnen het thema "{card.theme}"!</h1>
      <Card
        isFlipped={writeStore.cardFlipped}
        theme={card.theme}
        message={card.text}
        answers={card.answers}
        writeStore={writeStore}
        openStore={openStore}
      />
      <Link to={ROUTES.open}>
        <Button>Dit kaartje terug gooien</Button>
      </Link>
      {!openStore.answer ? (
        <Button variant="contained" onClick={handleClickAnswer}>
          Dit kaartje beantwoorden
        </Button>
      ) : null}

      <Button onClick={handleAnswerCard}>Klaar</Button>
      {openStore.answer ? <Keyboard store={openStore} /> : null}
    </>
  );
};

Answer.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(`openStore`, `writeStore`)(observer(Answer));

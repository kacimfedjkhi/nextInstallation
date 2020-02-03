import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import Card from "../components/Card";

const Answer = ({ openStore, writeStore }) => {
  const card = openStore.showCard();

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
    </>
  );
};

Answer.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(`openStore`, `writeStore`)(observer(Answer));

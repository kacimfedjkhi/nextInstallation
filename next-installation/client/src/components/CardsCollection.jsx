import React from "react";
import styled from "styled-components";
import CardElement from "./CardElement";
import { inject, observer } from "mobx-react";

const CardsCollection = ({ openStore }) => {
  const getXpos = () => {
    const x = Math.floor(Math.random() * window.innerWidth - 400);
    console.log("EY TIS X", window.innerWidth, x);

    return x;
  };

  const getYpos = () => {
    const y = Math.floor(Math.random() * window.innerHeight - 250);
    console.log("EY TIS Y", window.innerHeight, y);

    return y;
  };

  let cards = openStore.cards;

  return (
    <StyledSpace>
      {cards.map(card => (
        <CardElement
          key={card.uniqueId}
          xPos={getXpos()}
          yPos={getYpos()}
          data={card}
          store={openStore}
        />
      ))}
    </StyledSpace>
  );
};

const StyledSpace = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default inject(`openStore`)(observer(CardsCollection));

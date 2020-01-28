import React from "react";
import styled from "styled-components";
import CardElement from "./CardElement";
import { inject, observer } from "mobx-react";

const StyledSpace = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f5f5f0;
  z-index: -1;
`;

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
          xPos={getXpos()}
          yPos={getYpos()}
          theme="sports"
          messages="3"
        />
      ))}
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
    </StyledSpace>
  );
};

export default inject(`openStore`)(observer(CardsCollection));

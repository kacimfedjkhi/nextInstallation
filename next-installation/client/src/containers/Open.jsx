import React from "react";
import CardsCollection from "../components/CardsCollection";
import styled from "styled-components";
import backgroundImage from "../assets/img/onboardingBg.jpg";
import swipeNl from "../assets/img/swipe_nl.png";
import swipeFr from "../assets/img/swipe_fr.png";
import { inject, observer } from "mobx-react";

const Open = ({ uiStore, openStore, writeStore }) => {
  openStore.answer = false; //reset to hide keyboard
  writeStore.cardFlipped = false;

  return (
    <StyledPage>
      <CardsCollection />
      <SwipeGesture>
        <img
          src={uiStore.userLanguage === "nl" ? swipeNl : swipeFr}
          width="300"
          alt=""
        />
      </SwipeGesture>
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
`;

const SwipeGesture = styled.div`
  display: inline;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 30rem;
  height: 20rem;
`;

export default inject(`uiStore`, `openStore`, `writeStore`)(observer(Open));

import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import QRCode from "qrcode.react";

import styled from "styled-components";
import backgroundImage from "../assets/img/adminBg.jpg";
import turqoiseBtn from "../assets/img/turqoiseBtn_s_dark.png";
import textBubble from "../assets/img/textBubble_light.png";

const Answered = ({ openStore, uiStore, history }) => {
  console.log(openStore.selectedCard);

  const handleClickWrite = () => {
    uiStore.selectedAction = "write";
    history.push(ROUTES.onboarding);
  };

  return (
    <StyledPage>
      <ThankLine>
        {uiStore.userLanguage === "nl"
          ? "Bedankt om dit kaartje van een antwoord te voorzien"
          : "Merci d'avoir répondu à cette carte"}
        !
      </ThankLine>
      <Follow>
        {uiStore.userLanguage === "nl" ? (
          <>
            Blijf dit kaartje <span>volgen</span> via onderstaande{" "}
            <span>QR-code</span>
          </>
        ) : (
          <>
            Continuez à <span>suivre</span> cette carte en utilisant{" "}
            <span>le code QR</span> ci-dessous
          </>
        )}
      </Follow>
      <Others>
        {uiStore.userLanguage === "nl"
          ? "en kijk wat anderen te zeggen hebben!"
          : "et voyez ce que les autres ont à dire !"}
      </Others>
      <Codes>
        <QRCode value={`index.html/${openStore.selectedCard}`} size="110" />
        <UniqueId>{openStore.selectedCard}</UniqueId>
      </Codes>
      <MoreBtn>
        <MoreTxt>
          <p>Heel wat lege kaartjes wachten om verstuurd te worden</p>
        </MoreTxt>
        <WriteBtn onClick={handleClickWrite}>
          Zelf een kaartje versturen
        </WriteBtn>
      </MoreBtn>
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

const ThankLine = styled.p`
  color: #4eb5bb;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 600;
`;

const Follow = styled.h2`
  color: #4eb5bb;
  font-size: 3.5rem;
  font-family: "Nunito";
  font-weight: bold;
  padding: 2.5rem 0 1rem 0;

  & span {
    color: #4da0a4;
  }
`;

const Others = styled.p`
  color: #4da0a4;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 600;
`;

const Codes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const UniqueId = styled.p`
  color: #4da0a4;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: bold;
  padding-top: 2rem;
`;

const MoreBtn = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

const MoreTxt = styled.div`
  background-image: url(${textBubble});
  background-size: contain;
  width: 26rem;
  height: 20rem;
  position: relative;
  top: 2rem;
  left: -8rem;
  transform: rotate(2deg);

  & p {
    color: white;
    font-size: 2rem;
    font-family: "Nunito";
    font-weight: bold;
    transform: rotate(-6deg);
    max-width: 20rem;
    position: relative;
    top: 4rem;
    left: 3rem;
  }
`;

const WriteBtn = styled.button`
  border: none;
  background-image: url(${turqoiseBtn});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  width: 40rem;
  height: 7.4rem;

  color: white;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: 600;

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

Answered.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(`openStore`, `uiStore`)(withRouter(observer(Answered)));

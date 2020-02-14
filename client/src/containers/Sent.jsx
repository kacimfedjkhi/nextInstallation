import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { withRouter, Link } from "react-router-dom";
import { ROUTES } from "../constants";
import shortid from "shortid";
import QRCode from "qrcode.react";

import styled from "styled-components";
import backgroundImage from "../assets/img/adminBg.jpg";
import purpleBtn from "../assets/img/purpleBtn_s.png";
import textBubble from "../assets/img/textBubble_purple.png";
import nextArrow from "../assets/img/nextArrow.png";

const Sent = ({ openStore, uiStore, writeStore }) => {
  const handleClickWrite = () => {
    uiStore.selectedAction = "open";
    writeStore.sendCard();
  };

  const getUniqueKey = () => {
    return shortid.generate();
  };

  writeStore.uniqueId = getUniqueKey();

  return (
    <StyledPage>
      <ThankLine>
        {uiStore.userLanguage === "nl"
          ? "Bedankt, je kaartje is met succes verzonden"
          : "Merci d'avoir répondu à cette carte"}
        !
      </ThankLine>
      <Follow>
        {uiStore.userLanguage === "nl" ? (
          <>
            Blijf je kaartje <span>volgen</span> via onderstaande{" "}
            <span>QR-code</span>
          </>
        ) : (
          <>
            Continuez à <span>suivre</span> votre carte en utilisant{" "}
            <span>le code QR</span> ci-dessous
          </>
        )}
      </Follow>
      <Others>
        {uiStore.userLanguage === "nl"
          ? "en zie je kaartje aangevuld worden met de kennis uit de Eurometropool!"
          : "et voyez votre carte postale complétée par les connaissances de l'Eurométropole!"}
      </Others>
      <Codes>
        <QRCode value={`index.html/${writeStore.uniqueId}`} size="210" />
        <UniqueId>{writeStore.uniqueId}</UniqueId>
      </Codes>
      <MoreBtn>
        <MoreTxt>
          <p>Heel wat kaartjes wachten nog op een antwoord..</p>
        </MoreTxt>
        <Link to={ROUTES.onboarding}>
          <WriteBtn onClick={handleClickWrite}>
            <span> Een kaartje beantwoorden</span>
            <img src={nextArrow} width="30" alt="previous step arrow" />
          </WriteBtn>
        </Link>
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
  color: #8089ce;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 600;
`;

const Follow = styled.h2`
  color: #8089ce;
  font-size: 3.5rem;
  font-family: "Nunito";
  font-weight: bold;
  padding: 3.5rem 0 2rem 0;

  & span {
    color: #4e5587;
  }
`;

const Others = styled.p`
  color: #8089ce;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 600;
  padding-bottom: 4rem;
`;

const Codes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const UniqueId = styled.p`
  color: #4e5587;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: bold;
  padding-top: 2rem;
`;

const MoreBtn = styled.div`
  position: absolute;
  right: 5rem;
  bottom: 5rem;
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
    line-height: 2.5rem;
    font-family: "Nunito";
    font-weight: bold;
    transform: rotate(-6deg);
    max-width: 20rem;
    text-align: center;
    position: relative;
    top: 4rem;
    left: 3rem;
  }
`;

const WriteBtn = styled.button`
  border: none;
  background-image: url(${purpleBtn});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  width: 40rem;
  height: 7.4rem;

  color: white;
  font-size: 2rem;
  font-family: "Nunito";
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-right: 1rem;
  }

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

Sent.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(
  `openStore`,
  `uiStore`,
  `writeStore`
)(withRouter(observer(Sent)));

import React, { useState } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { withRouter, Link } from "react-router-dom";
import { ROUTES } from "../constants";
import shortid from "shortid";
import QRCode from "qrcode.react";

import styled from "styled-components";
import backgroundImage from "../assets/img/choiceBg.png";

import steps3 from "../assets/img/steps/steps_3.png";

import nature from "../assets/img/envelopes/nature.png";
import news from "../assets/img/envelopes/news.png";
import art from "../assets/img/envelopes/art.png";
import culinary from "../assets/img/envelopes/culinary.png";
import tourism from "../assets/img/envelopes/tourism.png";
import technology from "../assets/img/envelopes/technology.png";

import natureSeal from "../assets/img/envelopes/natureSeal.png";
import newsSeal from "../assets/img/envelopes/newsSeal.png";
import artSeal from "../assets/img/envelopes/artSeal.png";
import culinarySeal from "../assets/img/envelopes/culinarySeal.png";
import tourismSeal from "../assets/img/envelopes/tourismSeal.png";
import technologySeal from "../assets/img/envelopes/technologySeal.png";

const SealCard = ({ openStore, uiStore, writeStore }) => {
  const images = {
    news: [news, newsSeal],
    nature: [nature, natureSeal],
    culinary: [culinary, culinarySeal],
    tourism: [tourism, tourismSeal],
    technology: [technology, technologySeal],
    art: [art, artSeal]
  };

  const [img, setImg] = useState(images[writeStore.theme][0]);

  const handleClickWrite = () => {
    uiStore.selectedAction = "open";
    writeStore.sendCard();
  };

  const getUniqueKey = () => {
    return shortid.generate();
  };

  const handleSealCard = () => {
    setImg(images[writeStore.theme][1]);
    //writeStore.sealed = true;

    setTimeout(toQr, 750);
  };

  const toQr = () => {
    writeStore.sealed = true;
  };

  writeStore.uniqueId = getUniqueKey();

  return (
    <StyledPage>
      <Steps img={steps3}>
        <p>Seal card</p>
      </Steps>
      <Text>
        <ControlTitle>Verzegel je envelop!</ControlTitle>
        <ControlText>
          Druk op de envelop om er een stempel op te drukken
        </ControlText>
      </Text>
      <Envelope src={img} width="800" alt="" onClick={handleSealCard} />
    </StyledPage>
  );
};

const StyledPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  z-index: 0;
`;

const Text = styled.div`
  position: absolute;
  left: 25rem;
  top: 45%;
`;

const Steps = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 55rem;
  height: 13rem;

  position: fixed;
  top: 5rem;
  left: 5rem;

  & p {
    display: none;
  }
`;

const ControlTitle = styled.h2`
  color: #8089ce;
  font-family: "Nunito";
  font-size: 4rem;
  font-weight: 800;
  line-height: 5rem;
  margin-bottom: 3rem;
`;

const ControlText = styled.p`
  color: #8089ce;
  font-family: "Nunito";
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;
  max-width: 25rem;
`;

const Envelope = styled.img`
  position: absolute;
  right: 20rem;
  top: 30rem;
  transform: rotate(-6deg);
`;

SealCard.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(
  `openStore`,
  `uiStore`,
  `writeStore`
)(withRouter(observer(SealCard)));

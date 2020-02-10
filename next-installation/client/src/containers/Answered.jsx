import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

import styled from "styled-components";
import backgroundImage from "../assets/img/adminBg.jpg";
import QRCode from "qrcode.react";

const Answer = ({ openStore }) => {
  console.log(openStore.selectedCard);

  return (
    <StyledPage>
      <ThankLine>
        Bedankt om dit kaartje van een antwoord te voorzien!
      </ThankLine>
      <h2>
        Blijf dit kaartje <span>volgen</span> via onderstaande{" "}
        <span>QR-code</span>
      </h2>
      <p>en kijk wat anderen te zeggen hebben!</p>

      <div>
        <QRCode value={`index.html/${openStore.selectedCard.uniqueId}`} />
        <p>{openStore.selectedCard}</p>
      </div>
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
  color: #6ec8cd;
  font-size: 2.5rem;
  font-family: "Nunito";
  font-weight: 600;
`;

Answer.propTypes = {
  openStore: PropTypes.observableObject.isRequired
};

export default inject(
  `openStore`,
  `writeStore`,
  `uiStore`
)(withRouter(observer(Answer)));

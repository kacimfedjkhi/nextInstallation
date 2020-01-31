import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";
import shortid from "shortid";
import QRCode from "qrcode.react";

import styled from "styled-components";

const Home = ({ uiStore, writeStore }) => {
  const handleEndWriting = e => {
    uiStore.selectedAction = "open";
    writeStore.sendCard();
  };

  const QRContainer = styled.div`
    padding: 20px;
  `;

  console.log(shortid.generate());

  const getUniqueKey = () => {
    return shortid.generate();
  };

  writeStore.uniqueId = getUniqueKey();

  return (
    <>
      <h1>Uw kaartje werd met succes verzonden!</h1>
      <p>Dit is uw unieke code: {writeStore.uniqueId}</p>
      <QRContainer>
        <QRCode value={`index.html/${writeStore.uniqueId}`} />
      </QRContainer>

      <Link to={ROUTES.onboarding}>
        <Button variant="contained" onClick={() => handleEndWriting()}>
          Klaar, ga verder!
        </Button>
      </Link>
    </>
  );
};

export default inject(`uiStore`, `writeStore`)(observer(Home));

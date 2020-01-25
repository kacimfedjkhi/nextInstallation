import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";
import shortid from "shortid";
import QRCode from "qrcode.react";

import styled from "styled-components";

const Home = ({ uiStore }) => {
  const handleSetAction = e => {
    uiStore.selectedAction = e;
  };

  const QRContainer = styled.div`
    padding: 20px;
  `;

  console.log(shortid.generate());

  const getUniqueKey = () => {
    return shortid.generate();
  };

  const uniqueKey = getUniqueKey();

  return (
    <>
      <h1>Uw kaartje werd met succes verzonden!</h1>
      <p>Dit is uw unieke code: {uniqueKey}</p>
      <QRContainer>
        <QRCode value={`index.html/${uniqueKey}`} />
      </QRContainer>

      <Link to={ROUTES.onboarding}>
        <Button variant="contained" onClick={() => handleSetAction("write")}>
          Schrijf een kaartje
        </Button>
      </Link>
    </>
  );
};

export default inject(`uiStore`)(observer(Home));

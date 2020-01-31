import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";

const Home = ({ uiStore }) => {
  const handleSetAction = e => {
    uiStore.selectedAction = e;
  };

  return (
    <>
      <h1>Schrijf of open een kaartje</h1>
      <Link to={ROUTES.onboarding}>
        <Button variant="contained" onClick={() => handleSetAction("write")}>
          {uiStore.userLanguage === "nl"
            ? "Schrijf een kaartje"
            : "Ecrit une carte"}
        </Button>
      </Link>
      <Link to={ROUTES.onboarding}>
        <Button variant="contained" onClick={() => handleSetAction("open")}>
          {uiStore.userLanguage === "nl"
            ? "Open een kaartje"
            : "Ouvre une carte"}
        </Button>
      </Link>
    </>
  );
};

export default inject(`uiStore`)(observer(Home));

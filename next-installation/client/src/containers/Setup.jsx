import React, { useState } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { ROUTES } from "../constants";
import SetupLocation from "../components/setup/SetupLocation";
import SetupEvent from "../components/setup/SetupEvent";
import SetupUserLanguage from "../components/setup/SetupUserLanguage";

const Setup = ({ uiStore }) => {
  const [count, setCount] = useState(0);

  const handleClickSetup = () => {
    setCount(count + 1);
  };
  return (
    <>
      {count === 0 ? <SetupUserLanguage /> : null}
      {count === 1 ? (
        <>
          <SetupLocation />
          <SetupEvent />
        </>
      ) : null}

      {count === 1 ? (
        <Link to={ROUTES.home}>
          <Button variant="contained" onClick={handleClickSetup}>
            {uiStore.adminLanguage === "nl"
              ? content.nl.startBtn
              : content.fr.startBtn}
          </Button>
        </Link>
      ) : (
        <Button variant="contained" onClick={handleClickSetup}>
          {uiStore.adminLanguage === "nl"
            ? content.nl.btnTxt
            : content.fr.btnTxt}
        </Button>
      )}
    </>
  );
};

const content = {
  nl: {
    btnTxt: "De installatie verder configureren",
    startBtn: "De installatie opstarten"
  },
  fr: {
    btnTxt: "Configurer davantage l'installation",
    startBtn: "Mise en service de l'installation"
  }
};

Setup.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Setup));

import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { ROUTES } from "../constants";
import InfoModal from "../components/InfoModal";

const Onboarding = ({ uiStore }) => {
  console.log(uiStore.selectedAction);

  const selectedAction = uiStore.selectedAction;

  return (
    <>
      <h1>
        {selectedAction === "write" ? (
          <p>
            De <span onClick={uiStore.handleToggleModal}>Eurometropool</span>{" "}
            barst van mensen die iets te vertellen hebben. Ben je benieuwd?
          </p>
        ) : (
          <p>
            Er zijn momenteel heel wat digitale postkaartjes in de omgang binnen
            de <span onClick={uiStore.handleToggleModal}>Eurometropool</span>.
          </p>
        )}
      </h1>
      <p>
        {selectedAction === "write"
          ? `Stuur je digitaal postkaartje de metropool in!`
          : `Beantwoord nu een kaartje en deel uw kennis`}
      </p>
      {selectedAction === "write" ? (
        <ul>
          <li>
            <h3>Kies een Thema</h3>
            <p>dat je interessant vindt zoals sport, culinair...</p>
          </li>
          <li>
            <h3>Vul je kaartje in</h3>
            <p>en vertel of vraag iets</p>
          </li>
          <li>
            <h3>Verstuur je kaartje</h3>
            <p>en volg het traject</p>
          </li>
        </ul>
      ) : (
        <p>Tis om te openen maatjes!!</p>
      )}

      <InfoModal />

      <Link to={ROUTES.home}>
        <Button>Terug naar start</Button>
      </Link>
      {selectedAction === "write" ? (
        <Link to={ROUTES.write}>
          <Button variant="contained">Verstuur een kaartje</Button>
        </Link>
      ) : (
        <Link to={ROUTES.open}>
          <Button variant="contained">Open een kaartje</Button>
        </Link>
      )}
    </>
  );
};

Onboarding.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Onboarding));

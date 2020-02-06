import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { ROUTES } from "../constants";
import InfoModal from "../components/InfoModal";

import mapPurple from "../assets/img/mapPurple.png";
import mapTurqoise from "../assets/img/mapTurqoise.png";
import backgroundImage from "../assets/img/onboardingBg.jpg";
import purpleBtn from "../assets/img/purpleBtn_s.png";
import turqoiseBtn from "../assets/img/turqoiseBtn_s.png";
import greyBtn from "../assets/img/greyBtn_s.png";

const Onboarding = ({ uiStore }) => {
  console.log(uiStore.selectedAction);

  const selectedAction = uiStore.selectedAction;

  return (
    <StyledPage>
      <Title
        txtColor={selectedAction === "write" ? "#8089ce" : "#6ec8cd"}
        spanColor={selectedAction === "write" ? "#4e5587" : "#4da0a4"}
      >
        {selectedAction === "write" ? (
          <>
            De <span onClick={uiStore.handleToggleModal}>Eurometropool</span>{" "}
            barst van mensen die iets te vertellen hebben. Jij ongetwijfeld ook!
          </>
        ) : (
          <>
            De <span onClick={uiStore.handleToggleModal}>Eurometropool</span>{" "}
            barst van mensen die iets te vertellen hebben. Ben je benieuwd?
          </>
        )}
      </Title>
      <Baseline txtColor={selectedAction === "write" ? "#8089ce" : "#6ec8cd"}>
        {selectedAction === "write"
          ? `Schrijf het op een postkaartje en stuur uw regionale kennis uit.`
          : `Open dan snel een kaartje en deel uw regionale kennis!`}
      </Baseline>
      <img
        src={selectedAction === "write" ? mapPurple : mapTurqoise}
        width="800"
        alt=""
      />

      <InfoModal />

      <ButtonWrapper>
        <Link to={ROUTES.home}>
          <Button
            img={greyBtn}
            txtColor={selectedAction === "write" ? "#8089ce" : "#6ec8cd"}
          >
            Terug naar start
          </Button>
        </Link>
        {selectedAction === "write" ? (
          <Link to={ROUTES.write}>
            <Button img={purpleBtn} txtColor={"white"}>
              Verstuur een kaartje
            </Button>
          </Link>
        ) : (
          <Link to={ROUTES.open}>
            <Button img={turqoiseBtn} txtColor={"white"}>
              Open een kaartje
            </Button>
          </Link>
        )}
      </ButtonWrapper>
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
`;

const Title = styled.h2`
  font-weight: bold;
  color: ${props => props.txtColor};
  font-size: 4rem;
  max-width: 90rem;
  padding: 2rem 0;
  text-align: center;

  && span {
    color: ${props => props.spanColor};
  }
`;

const Baseline = styled.h2`
  font-weight: bold;
  color: ${props => props.txtColor};
  font-size: 2.5rem;
  padding: 0rem 0 4rem 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: absolute;
  bottom: 5rem;
`;

const Button = styled.button`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 30rem;
  height: 5rem;
  border: none;
  background-color: transparent;

  color: ${props => props.txtColor};
  font-size: 2rem;
  font-weight: bold;
  font-family: "Nunito";

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

Onboarding.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Onboarding));

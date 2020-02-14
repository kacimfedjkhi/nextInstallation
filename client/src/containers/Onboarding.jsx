import React, { useState } from "react";
import { inject, observer, PropTypes } from "mobx-react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { ROUTES } from "../constants";
import InfoModal from "../components/InfoModal";

import backgroundImage from "../assets/img/onboardingBg.jpg";
import purpleBtn from "../assets/img/purpleBtn_s.png";
import turqoiseBtn from "../assets/img/turqoiseBtn_s.png";
import greyBtn from "../assets/img/greyBtn_s.png";
import nextArrow from "../assets/img/nextArrow.png";
import prevArrow from "../assets/img/prevArrow.png";
import prevArrowOpen from "../assets/img/prevArrow_turqoise.png";

import infoWrite from "../assets/img/infoWrite.png";
import infoOpen from "../assets/img/infoOpen.png";

const Onboarding = ({ uiStore }) => {
  console.log(uiStore.selectedAction);

  const [count, setCount] = useState(0);

  const selectedAction = uiStore.selectedAction;

  return (
    <StyledPage>
      {count === 0 ? (
        <>
          <Title
            txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
            spanColor={selectedAction === "write" ? "#4e5587" : "#4da0a4"}
          >
            {selectedAction === "write" ? (
              <>
                De{" "}
                <span onClick={uiStore.handleToggleModal}>Eurometropool</span>{" "}
                barst van mensen die iets te vertellen hebben. Jij ongetwijfeld
                ook!
              </>
            ) : (
              <>
                De{" "}
                <span onClick={uiStore.handleToggleModal}>Eurometropool</span>{" "}
                barst van mensen die iets te vertellen hebben. Ben je benieuwd?
              </>
            )}
          </Title>
          <Baseline
            txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
          >
            {selectedAction === "write"
              ? `Schrijf het op een postkaartje en stuur uw regionale kennis uit.`
              : `Open dan snel een kaartje en deel uw regionale kennis!`}
          </Baseline>

          <StyledImg
            src={
              selectedAction === "write"
                ? "https://kacimfedjkhi.be/gifs/euroWrite_nl.gif"
                : "https://kacimfedjkhi.be/gifs/euroOpen_nl.gif"
            }
            width="1000"
            alt=""
          />
          <InfoBtn
            src={selectedAction === "write" ? infoWrite : infoOpen}
            width="250"
            onClick={uiStore.handleToggleModal}
          />

          <InfoModal />

          <ButtonWrapper>
            <Link to={ROUTES.home}>
              <Button
                img={greyBtn}
                txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
              >
                <img
                  src={selectedAction === "write" ? prevArrow : prevArrowOpen}
                  width="30"
                  alt="previous step arrow"
                />
                <span>Terug naar start</span>
              </Button>
            </Link>
            {selectedAction === "write" ? (
              <Button
                img={purpleBtn}
                txtColor={"white"}
                onClick={() => setCount(1)}
              >
                <span>Postkaartje schrijven!</span>
                <img src={nextArrow} width="30" alt="previous step arrow" />
              </Button>
            ) : (
              <Button
                img={turqoiseBtn}
                txtColor={"white"}
                onClick={() => setCount(1)}
              >
                <span>Postkaartje openen!</span>
                <img src={nextArrow} width="30" alt="previous step arrow" />
              </Button>
            )}
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Title
            txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
            spanColor={selectedAction === "write" ? "#4e5587" : "#4da0a4"}
          >
            {selectedAction === "write" ? (
              <>
                Een postkaartje versturen met jouw vraag op gebeurt in slechts{" "}
                <span>3 stappen</span>
              </>
            ) : (
              <>
                Een postkaartje openen en beantwoorden gebeurt in slechts{" "}
                <span>3 stappen</span>
              </>
            )}
          </Title>
          <Baseline
            txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
          >
            {selectedAction === "write"
              ? `En blijf je kaartje erna op de voet volgen via de track and trace!`
              : `En blijf het kaartje erna op de voet volgen via de track and trace!`}
          </Baseline>
          <img
            src={
              selectedAction === "write"
                ? "https://kacimfedjkhi.be/gifs/onboardingWrite.gif"
                : "https://kacimfedjkhi.be/gifs/onboardingOpen.gif"
            }
            width={2000}
            alt=""
          />
          <ButtonWrapper>
            <Link to={ROUTES.home}>
              <Button
                img={greyBtn}
                txtColor={selectedAction === "write" ? "#8089ce" : "#4eb5bb"}
              >
                <img
                  src={selectedAction === "write" ? prevArrow : prevArrowOpen}
                  width="30"
                  alt="previous step arrow"
                />
                <span>Terug naar start</span>
              </Button>
            </Link>
            {selectedAction === "write" ? (
              <Link to={ROUTES.write}>
                <Button img={purpleBtn} txtColor={"white"}>
                  <span>Verstuur een kaartje</span>
                  <img src={nextArrow} width="30" alt="previous step arrow" />
                </Button>
              </Link>
            ) : (
              <Link to={ROUTES.open}>
                <Button img={turqoiseBtn} txtColor={"white"}>
                  <span>Open een kaartje</span>
                  <img src={nextArrow} width="30" alt="previous step arrow" />
                </Button>
              </Link>
            )}
          </ButtonWrapper>
        </>
      )}
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
  line-height: 5rem;
  max-width: 90rem;
  padding: 2rem 0;
  text-align: center;

  & span {
    color: ${props => props.spanColor};
    position: relative;
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
  width: 93%;
  position: absolute;
  bottom: 5rem;
`;

const StyledImg = styled.img`
  transform: scale(1.5);
`;

const InfoBtn = styled.img`
  position: absolute;
  top: 30rem;
  right: 65rem;
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

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin: 0 1rem;
  }

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

Onboarding.propTypes = {
  uiStore: PropTypes.observableObject.isRequired
};

export default inject(`uiStore`)(observer(Onboarding));

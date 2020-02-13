import React from "react";
import { inject, observer } from "mobx-react";
import { ROUTES } from "../constants/index";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import purpleBtn from "../assets/img/purpleBtn_s.png";
import greyBtn from "../assets/img/greyBtn_s.png";
import nextArrow from "../assets/img/nextArrow.png";
import prevArrow from "../assets/img/prevArrow.png";

const BottomButtons = ({ writeStore, history }) => {
  const activeStep = writeStore.activeStep;

  const handleNext = () => {
    writeStore.setActiveStep("increase");

    if (activeStep === 0) {
      writeStore.cardFlipped = false;
    }

    if (activeStep === 2) {
      //writeStore.sendCard();
      history.push(ROUTES.sent);
    }
  };

  const handlePrev = () => {
    writeStore.setActiveStep("decrease");
  };

  const checkDisabled = () => {
    switch (activeStep) {
      case 0:
        writeStore.theme === "" ? (disabled = true) : (disabled = false);
        break;
      case 1:
        writeStore.message === "" ? (disabled = true) : (disabled = false);
        break;
      case 2:
        disabled = false;
        break;
      default:
        disabled = true;
    }
  };

  let disabled = true;
  let prevBtn = "";
  let nextBtn = "";

  checkDisabled();

  switch (activeStep) {
    case 0:
      prevBtn = "Terug";
      nextBtn = "Boodschap toevoegen";
      break;
    case 1:
      prevBtn = "Thema wijzigen";
      nextBtn = "Kaartje controleren";
      break;
    case 2:
      prevBtn = "Boodschap wijzigen";
      nextBtn = "Kaartje versturen";
      break;
    default:
      return "Uw kaartje wordt verzonden";
  }

  return (
    <BottomButtonsWrapper>
      {activeStep < 4 ? (
        <>
          <PrevBtn onClick={handlePrev} opacity={activeStep > 0 ? "1" : "0"}>
            <img src={prevArrow} width="30" alt="previous step arrow" />
            <span>{prevBtn}</span>
          </PrevBtn>

          {!disabled ? (
            <NextBtn onClick={handleNext}>
              <span>{nextBtn}</span>
              <img src={nextArrow} width="30" alt="previous step arrow" />
            </NextBtn>
          ) : null}
        </>
      ) : null}
    </BottomButtonsWrapper>
  );
};

const BottomButtonsWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const NextBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${purpleBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30rem;
  height: 5.5rem;

  color: white;
  font-family: "Nunito";
  font-size: 2rem;
  font-weight: 600;

  position: relative;

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

const PrevBtn = styled.button`
  opacity: ${props => props.opacity};

  border: none;
  background-color: transparent;
  background-image: url(${greyBtn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 26.5rem;
  height: 5.5rem;

  color: #8089ce;
  font-family: "Nunito";
  font-size: 2rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    margin-left: 1rem;
  }

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

export default inject(`writeStore`)(withRouter(observer(BottomButtons)));

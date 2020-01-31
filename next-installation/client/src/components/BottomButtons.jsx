import React from "react";
import { inject, observer } from "mobx-react";

import Button from "@material-ui/core/Button";

const BottomButtons = ({ writeStore, history }) => {
  const activeStep = writeStore.activeStep;

  const handleNext = () => {
    writeStore.setActiveStep("increase");

    if (activeStep === 0) {
      writeStore.cardFlipped = false;
    }

    if (activeStep === 2) {
      //history.push(ROUTES.sent);
      writeStore.sendCard();
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
      prevBtn = "terug";
      nextBtn = "Boodschap toevoegen";
      break;
    case 1:
      prevBtn = "thema wijzigen";
      nextBtn = "kaartje controleren";
      break;
    case 2:
      prevBtn = "boodschap wijzigen";
      nextBtn = "kaartje versturen";
      break;
    default:
      return "Uw kaartje wordt verzonden";
  }

  return (
    <>
      {activeStep < 4 ? (
        <>
          <Button
            variant="contained"
            onClick={handlePrev}
            disabled={activeStep === 0}
          >
            {prevBtn}
          </Button>
          <Button variant="contained" onClick={handleNext} disabled={disabled}>
            {nextBtn}
          </Button>
        </>
      ) : null}
    </>
  );
};

export default inject(`writeStore`)(observer(BottomButtons));

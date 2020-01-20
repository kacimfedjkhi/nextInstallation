import { decorate, observable, action } from "mobx";

//import { decorate, observable, action } from "mobx";

class WriteStore {
  activeStep = 0;
  theme = "";
  message = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  setActiveStep = amount => {
    switch (amount) {
      case "increase":
        return (this.activeStep = this.activeStep + 1);
      case "decrease":
        return (this.activeStep = this.activeStep - 1);
      case "reset":
        return (this.activeStep = 0);
      default:
        return "Unknown stepIndex";
    }
  };

  getStepTitle = stepIndex => {
    switch (stepIndex) {
      case 0:
        return "Welk thema spreekt je het meeste aan?";
      case 1:
        return "Wat zou je graag vertellen of vragen?";
      case 2:
        return "Is je kaartje klaar om te versturen?";
      case 3:
        return "Klaar! Uw kaartje wordt verstuurd";
      default:
        return "Unknown stepIndex";
    }
  };
}

decorate(WriteStore, {
  activeStep: observable,
  theme: observable,
  message: observable,
  setActiveStep: action
});

export default WriteStore;

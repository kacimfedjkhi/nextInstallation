import { decorate, observable, action } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

//import { decorate, observable, action } from "mobx";

class WriteStore {
  activeStep = 0;
  theme = "";
  message = "";
  uniqueId = "";
  pin = 1997;

  inputMethod = "templates";

  cardFlipped = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`card`);
    this.socket = rootStore.uiStore.socket;
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

  handleChangeInput = selectedInput => {
    switch (selectedInput) {
      case "templates":
        this.inputMethod = selectedInput;
        break;
      case "keyboard":
        console.log(selectedInput);

        this.inputMethod = selectedInput;
        break;
      default:
        return "templates";
    }
  };

  handleFlipCard = () => {
    if (!this.cardFlipped) {
      this.cardFlipped = true;
    } else {
      this.cardFlipped = false;
    }
  };

  sendCard = async data => {
    const card = new Card(
      this.theme,
      this.message,
      this.rootStore.uiStore.selectedLocation,
      [],
      this.uniqueId,
      this.pin
    );
    await this.rootStore.openStore.cards.push(card);
    //this.api.createCard(card);
    console.log(this.socket);

    this.socket.emit(`sendCard`, card);
  };
}

decorate(WriteStore, {
  activeStep: observable,
  theme: observable,
  message: observable,
  inputMethod: observable,
  cardFlipped: observable,
  setActiveStep: action,
  handleChangeInput: action,
  handleFlipCard: action,
  sendCard: action
});

export default WriteStore;

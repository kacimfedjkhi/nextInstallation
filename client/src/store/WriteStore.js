import { decorate, observable, action } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

//import { decorate, observable, action } from "mobx";

class WriteStore {
  activeStep = 0;
  image = 0;
  theme = "";
  message = "";
  uniqueId = "";

  inputMethod = "templates";

  cardFlipped = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
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
        return "Welk thema spreekt je het meest aan tijdens het ontdekken van een nieuwe regio, cultuur of land?";
      case 1:
        return "Wat zou je graag vertellen of vragen?";
      case 2:
        return "";
      case 3:
        return "Klaar! Uw kaartje wordt verstuurd";
      default:
        return "Unknown stepIndex";
    }
  };

  handleChangeInput = selectedInput => {
    this.inputMethod = selectedInput;
  };

  handleFlipCard = () => {
    if (!this.cardFlipped) {
      this.cardFlipped = true;
    } else {
      this.cardFlipped = false;
    }
  };

  sendCard = async () => {
    console.log(this.message);

    const card = new Card(
      this.theme,
      this.message,
      this.image,
      this.rootStore.uiStore.selectedLocation,
      [],
      [],
      this.uniqueId
    );
    //await this.rootStore.openStore.cards.push(card);
    this.api.createCard(card);

    this.socket.emit(`sendCard`, card);

    this.emptyValues();
  };

  emptyValues = () => {
    this.activeStep = 0;
    this.theme = "";
    this.message = "";
    this.uniqueId = "";
    this.cardFlipped = true;
  };

  handleClickTheme = e => {
    this.theme = e;
  };

  getImg = theme => {
    let img;
    console.log(this.theme);

    switch (this.rootStore.uiStore.userLanguage) {
      case "nl":
        this.theme == theme.en ? (img = theme.nl[1]) : (img = theme.nl[0]);
        break;
      case "fr":
        this.theme == theme.en ? (img = theme.fr[1]) : (img = theme.fr[0]);
        break;
      default:
        img = "";
    }

    return img;
  };

  handleChangeImage = () => {
    if (this.image < 4) {
      this.image++;
    } else {
      this.image = 0;
    }
  };
}

decorate(WriteStore, {
  activeStep: observable,
  theme: observable,
  message: observable,
  image: observable,
  inputMethod: observable,
  cardFlipped: observable,
  setActiveStep: action,
  handleChangeInput: action,
  handleFlipCard: action,
  sendCard: action,
  emptyValues: action,
  handleClickTheme: action,
  getImg: action,
  handleChangeImage: action
});

export default WriteStore;

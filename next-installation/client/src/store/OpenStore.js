import { decorate, observable, action } from "mobx";
import Api from "../api/index";

class OpenStore {
  cards = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
    this.socket = rootStore.uiStore.socket;
    this.getCards();
    //this.socket.on(`getCard`, this.getCards);
  }

  getCards = () => {
    this.api.getAllCards();
  };
}

decorate(OpenStore, {
  cards: observable,
  getCards: action
});

export default OpenStore;

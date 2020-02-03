import { decorate, observable, action, runInAction } from "mobx";
import Api from "../api/index";
import Card from "../models/Card";

class OpenStore {
  cards = [];
  selectedCard = "LPcVmOdZ9";
  message = "";
  answer = false;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = new Api(`cards`);
    this.socket = rootStore.uiStore.socket;
    this.getCards();
    this.socket.on(`getCard`, this.addCard);
  }

  getCards = () => {
    this.api.getAllCards().then(newCards => {
      if (newCards.length > 0) {
        newCards.forEach(newCard => this._addCard(newCard));
      }
    });
  };

  _addCard = values => {
    const card = new Card(this.rootStore);
    card.updateFromServer(values);
    runInAction(() => this.cards.push(card));
  };

  addCard = card => {
    console.log("SOKKET TEST", card);
    //const card = new Card(this.rootStore);
    this.cards.push(card);
  };

  showCard = () => {
    const card = this.cards.filter(obj => {
      return obj.uniqueId === this.selectedCard;
    });

    return card[0];
  };
}

decorate(OpenStore, {
  cards: observable,
  selectedCard: observable,
  answer: observable,
  message: observable,
  getCards: action,
  showCard: action
});

export default OpenStore;

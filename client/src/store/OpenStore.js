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
    this.socket.on(`getCard`, this._addCard);
    this.socket.on(`updateCard`, this.updateCard);
  }

  updateCard = newData => {
    const card = this.cards.filter(obj => {
      return obj.uniqueId === newData.uniqueId;
    });

    card[0].answers = newData.answers;
  };

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
    this.cards.push(card);
  };

  showCard = () => {
    const card = this.cards.filter(obj => {
      return obj.uniqueId === this.selectedCard;
    });

    return card[0];
  };

  answerCard = id => {
    if (this.message !== "") {
      const card = this.cards.filter(obj => {
        return obj.id === id;
      });

      card[0].answers.push(this.message);

      if (this.rootStore.uiStore.selectedLocation) {
        card[0].locations.push(this.rootStore.uiStore.selectedLocation);
      } else {
        card[0].locations.push("unknown location");
      }

      this.api.answerCard(card[0]);
      this.emptyValues();
      this.socket.emit(`saveAnswer`, card[0]);
      console.log(this.message);
    }
  };

  emptyValues = () => {
    this.message = "";
  };
}

decorate(OpenStore, {
  cards: observable,
  selectedCard: observable,
  answer: observable,
  message: observable,
  getCards: action,
  showCard: action,
  answerCard: action
});

export default OpenStore;

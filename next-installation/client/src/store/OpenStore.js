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
    this.socket.on(`updateCard`, this.updateCard);
  }

  updateCard = newData => {
    console.log("test sokket update", newData);

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
    //const card = new Card(this.rootStore);
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

      if (this.rootStore.uiStore.selectedLocation !== "") {
        card[0].locations.push(this.rootStore.uiStore.selectedLocation);
      }

      this.api.answerCard(card[0]);
      this.socket.emit(`saveAnswer`, card[0]);
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
  showCard: action
});

export default OpenStore;

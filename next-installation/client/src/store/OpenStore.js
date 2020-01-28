import { decorate, observable, action } from "mobx";

class OpenStore {
  cards = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.socket = rootStore.uiStore.socket;
    this.socket.on(`getCard`, this.getCards);
  }

  getCards = () => {
    console.log("kaartje ontvangen!! hihi tof");
  };
}

decorate(OpenStore, {
  cards: observable
});

export default OpenStore;

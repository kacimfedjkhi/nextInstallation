import WriteStore from "./WriteStore";

class Store {
  constructor() {
    this.writeStore = new WriteStore(this);
  }
}

export default new Store();

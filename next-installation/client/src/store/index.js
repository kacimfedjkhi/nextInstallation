import WriteStore from "./WriteStore";
import UIStore from "./UIStore";

class Store {
  constructor() {
    this.writeStore = new WriteStore(this);
    this.uiStore = new UIStore(this);
  }
}

export default new Store();

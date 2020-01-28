import WriteStore from "./WriteStore";
import UIStore from "./UIStore";
import OpenStore from "./OpenStore";

class Store {
  constructor() {
    this.uiStore = new UIStore(this);
    this.openStore = new OpenStore(this);
    this.writeStore = new WriteStore(this);
  }
}

export default new Store();

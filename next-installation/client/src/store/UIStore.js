import { decorate, observable, action } from "mobx";
import io from "socket.io-client";

class UIStore {
  selectedAction = "";
  setupStep = 0;
  adminLanguage = "";

  userLanguage = "";
  locationType = "cultuurhuis";
  selectedLocation = "";

  event = false;
  eventName = "";
  modal = false;

  socket = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.connectSocket();
  }

  connectSocket = () => {
    let port;
    if (
      window.location.hostname === `localhost` ||
      window.location.hostname === `192.168.0.218`
    ) {
      port = `:4000`;
    } else {
      port = ``;
    }

    this.socket = io(
      `${window.location.protocol}//${window.location.hostname}${port}`
    );
    //this.socket = io(`/`);
  };

  setAdminLanguage = language => {
    switch (language) {
      case "nl":
        this.adminLanguage = "nl";
        console.log(language);

        break;
      case "fr":
        this.adminLanguage = "fr";
        break;
      default:
        return "nl";
    }
  };

  setUserLanguage = language => {
    switch (language) {
      case "nl":
        this.userLanguage = "nl";
        console.log(language);

        break;
      case "fr":
        this.userLanguage = "fr";
        break;
      default:
        return "nl";
    }
  };

  handleChangeLocation = value => {
    console.log(value);

    this.selectedLocation = value;
  };

  changeLocationType = value => {
    switch (value) {
      case "cultuurhuis":
        this.locationType = value;
        break;
      case "openbaar":
        this.locationType = value;
        break;
      default:
        return value;
    }
  };

  toggleCheckedEvent = e => {
    if (!this.event) {
      this.event = true;
    } else {
      this.event = false;
    }
  };

  addEventName = value => {
    this.eventName = value;
  };

  handleToggleModal = () => {
    this.modal ? (this.modal = false) : (this.modal = true);
  };
}

decorate(UIStore, {
  adminLanguage: observable,
  userLanguage: observable,
  selectedLocation: observable,
  locationType: observable,
  event: observable,
  eventName: observable,
  selectedAction: observable,
  modal: observable,
  setAdminLanguage: action,
  setUserLanguage: action,
  changeLocationType: action,
  toggleCheckedEvent: action,
  addEventName: action
});

export default UIStore;

import { decorate, observable, action } from "mobx";

//import { decorate, observable, action } from "mobx";

class UIStore {
  adminLanguage = "";
  userLanguage = "";
  locationType = "cultuurhuis";
  selectedLocation = "";
  event = false;
  eventName = "";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

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
}

decorate(UIStore, {
  adminLanguage: observable,
  userLanguage: observable,
  selectedLocation: observable,
  locationType: observable,
  event: observable,
  eventName: observable,
  setAdminLanguage: action,
  setUserLanguage: action,
  changeLocationType: action,
  toggleCheckedEvent: action,
  addEventName: action
});

export default UIStore;

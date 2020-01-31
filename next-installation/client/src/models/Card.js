import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Card {
  constructor(theme, text, locations, answers, uniqueId, pin, id = uuid.v4()) {
    this.theme = theme;
    this.text = text;
    this.locations = locations;
    this.answers = answers;
    this.uniqueId = uniqueId;
  }

  setId = id => (this.id = id);
  setTheme = theme => (this.theme = theme);
  setText = text => (this.text = text);
  setLocations = locations => (this.locations = locations);
  setAnswers = answers => (this.answers = answers);
  setUniqueId = uniqueId => (this.uniqueId = uniqueId);

  remove = () => {
    this.remove(this);
  };

  updateFromServer = values => {
    this.setId(values._id);
    this.setTheme(values.theme);
    this.setText(values.text);
    this.locations(values.locations);
    this.answers(values.answers);
    this.setUniqueId(values.uniqueId);
  };
}

decorate(Card, {
  id: observable,
  theme: observable,
  text: observable,
  locations: observable,
  answers: observable,
  uniqueId: observable,
  setId: action,
  setTheme: action,
  setText: action,
  setLocations: action,
  setAnswers: action,
  setUniqueId: action
});

export default Card;

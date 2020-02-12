import uuid from "uuid";
import { decorate, observable, action } from "mobx";

class Card {
  constructor(
    theme,
    text,
    image,
    locationCreated,
    locations,
    answers,
    uniqueId,
    pin,
    id = uuid.v4()
  ) {
    this.theme = theme;
    this.text = text;
    this.image = image;
    this.locationCreated = locationCreated;
    this.locations = locations;
    this.answers = answers;
    this.uniqueId = uniqueId;
  }

  setId = id => (this.id = id);
  setTheme = theme => (this.theme = theme);
  setText = text => (this.text = text);
  setImage = image => (this.image = image);
  setLocationCreated = locationCreated =>
    (this.locationCreated = locationCreated);
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
    this.setImage(values.image);
    this.setLocationCreated(values.locationCreated);
    this.setLocations(values.locations);
    this.setAnswers(values.answers);
    this.setUniqueId(values.uniqueId);
  };
}

decorate(Card, {
  id: observable,
  theme: observable,
  text: observable,
  image: observable,
  locationCreated: observable,
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

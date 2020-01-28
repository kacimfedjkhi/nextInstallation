class Api {
  constructor(entity) {
    this.entity = entity;
    console.log(entity);
  }

  getAllCards = async () => {
    //get cards from db
  };

  createCard = async obj => {
    console.log(obj);

    const r = await fetch(`/api/${this.entity}`, this.getOptions(`post`, obj));
    return await r.json();
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    console.log(options);

    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}

export default Api;

var moment = require("moment");

export class Publisher {
  constructor(id, name, currentCEO, foundedDate, image, marketValue) {
    this.id = id;
    this.name = name;
    this.currentCEO = currentCEO;
    this.foundedDate = moment(foundedDate, "DD/MM/YYYY").format("DD/MM/YYYY");
    this.image = image;
    this.marketValue = marketValue;
  }

  static create(objJSON) {
    return new this(
      objJSON.id,
      objJSON.name,
      objJSON.currentCEO,
      objJSON.foundedDate,
      objJSON.image,
      objJSON.marketValue
    );
  }
}

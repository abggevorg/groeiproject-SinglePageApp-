var moment = require("moment");

export class kunstenaar {
  constructor(id, first_name, last_name, birth_date, isAlive, image) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.birth_date = moment(birth_date, "DD/MM/YYYY").format("DD/MM/YYYY");
    this.isAlive = isAlive;
    this.image = image;
  }

  static create(objJSON) {
    return new this(
      objJSON.id,
      objJSON.first_name,
      objJSON.last_name,
      objJSON.birth_date,
      objJSON.isAlive,
      objJSON.image
    );
  }
}

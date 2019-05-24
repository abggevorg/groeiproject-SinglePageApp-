var moment = require("moment");

export class TemplateObject {
  constructor(id, field1, field2, field3, image) {
    this.id = id;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = moment(field3, "DD/MM/YYYY").format("DD/MM/YYYY");
    this.image = image;
  }

  static create(id, field1, field2, field3, image) {
    return new this(id, field1, field2, field3, image);
  }
  static create(objJSON) {
    return new this(
      objJSON.id,
      objJSON.field1,
      objJSON.field2,
      objJSON.field3,
      objJSON.image
    );
  }
  getImageURL() {
    if (this.image === undefined || this.image == "") {
      return "http://localhost:3000/anonymous.jpg";
    }
    return "http://localhost:3000/" + this.image;
  }
}

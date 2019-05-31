var moment = require("moment");

export class TemplateObject {
  constructor(id, field1, field2, field3, image_name, image) {
    this.id = id;
    this.field1 = field1;
    this.field2 = field2;
    this.field3 = moment(field3, "DD/MM/YYYY").format("DD/MM/YYYY");
    this.image_name = image_name;
    this.image = image;
  }

  static create(objJSON) {
    return new this(
      objJSON.id,
      objJSON.field1,
      objJSON.field2,
      objJSON.field3,
      objJSON.image_name,
      objJSON.image
    );
  }
}

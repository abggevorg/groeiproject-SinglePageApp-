export function validForm() {
  var moment = require("moment");
  //getting fild values
  let field1 = document.getElementById("field1").value;
  let field2 = document.getElementById("field2").value;
  let date_field3 = moment(
    document.getElementById("field3").value,
    "DD/MM/YYYY",
    true
  );
  let image = document.getElementById("image").files[0];
  let imageName;
  if (image === undefined || image == "") {
    imageName = "";
  } else {
    imageName = image.name;
  }

  var errorMessage = "";
  //field1 test
  if (field1 === undefined || field1 == "") {
    errorMessage += "field 1 is incorrect please fill field 1 in <br>";
  }
  if (field2 === undefined || field2 == "") {
    errorMessage += "field 2 is incorrect please fill field 2 in <br>";
  }
  if (
    date_field3 === undefined ||
    date_field3 == "" ||
    !date_field3.isValid()
  ) {
    errorMessage += "field 3 in incorrect (it should be like 12/12/1012)";
  }

  if (errorMessage == "") {
    return [id, first_name, last_name, birthday_date, image, countryD];
  } else {
    throw Error(errorMessage);
  }
}
export function showerror() {}

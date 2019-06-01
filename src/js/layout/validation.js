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
    errorMessage += "fild 1 is incorrect please fill fild 1 in <br>";
  }
  if (field2 === undefined || field2 == "") {
    errorMessage += "fild 2 is incorrect please fill fild 2 in <br>";
  }
  if (
    date_field3 === undefined ||
    date_field3 == "" ||
    !date_field3.isValid()
  ) {
    errorMessage += "fild 3 in incorrect (it should be like 12/12/1012)";
  }

  console.log(errorMessage + " +++ god of slecht");
  if (errorMessage == "") {
    return [field1, field2, date_field3.format("DD/MM/YYYY"), imageName, image];
  } else {
    throw Error(errorMessage);
  }
}
export function showerror() {}

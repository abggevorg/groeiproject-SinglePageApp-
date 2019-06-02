export function validForm() {
  var moment = require("moment");
  //getting fild values
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let birthday_date = moment(
    document.getElementById("birthday_date").value,
    "DD/MM/YYYY",
    true
  );
  let country = document.getElementById("country").value;
  let image = document.getElementById("image").files[0];
  let imageName;
  if (image === undefined || image == "") {
    imageName = "";
  } else {
    imageName = image.name;
  }
  console.log("jaaaaaa jaaaaaaaaaaa");
  var errorMessage = "";
  //field1 test
  if (first_name === undefined || first_name == "") {
    errorMessage += "field 1 is incorrect please fill field 1 in <br>";
  }
  if (last_name === undefined || last_name == "") {
    errorMessage += "field 2 is incorrect please fill field 2 in <br>";
  }
  if (
    birthday_date === undefined ||
    birthday_date == "" ||
    !birthday_date.isValid()
  ) {
    errorMessage += "field 3 in incorrect (it should be like 12/12/1012)";
  }

  if (errorMessage == "") {
    return [first_name, last_name, birthday_date, image, country];
  } else {
    throw Error(errorMessage);
  }
}
export function showerror() {}

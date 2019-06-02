import { isNumber } from "util";

var moment = require("moment");
export function validateForm() {
  //get field values
  let field1 = document.getElementById("field1").value;
  let field2 = document.getElementById("field2").value;
  let date_field3 = moment(
    document.getElementById("field3").value,
    "DD/MM/YYYY",
    true
  );
  let image = document.getElementById("image").files[0];
  let marketValue = document.getElementById("marketValue").value;

  var errorMessage = "";
  //field1 test
  if (field1 === undefined || field1 == "") {
    errorMessage += "Name 1 is incorrect please fill field 1 in <br>";
  }
  if (field2 === undefined || field2 == "") {
    errorMessage += "Current CEO 2 is incorrect please fill field 2 in <br>";
  }
  if (
    date_field3 === undefined ||
    date_field3 == "" ||
    !date_field3.isValid()
  ) {
    errorMessage += "field 3 is incorrect (it should be like 12/12/1012)";
  }

  if (
    marketValue === undefined ||
    marketValue == "" ||
    !isNumeric(marketValue)
  ) {
    errorMessage +=
      "Market value is not filled or filled incorrectly; format : xxx.xx";
  }

  if (errorMessage == "") {
    return [
      field1,
      field2,
      date_field3.format("DD/MM/YYYY"),
      image,
      marketValue
    ];
  } else {
    throw Error(errorMessage);
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

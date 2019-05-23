import "bootstrap/dist/css/bootstrap.css";
import * as REST from "../REST/restclient";
import { TemplateObject } from "../Model/TemplateObject.js";
var moment = require("moment");

export function setPageContent(selectedNavItem) {
  for (let section of document.getElementsByTagName("section")) {
    if (section.id.toLowerCase() === selectedNavItem.innerText.toLowerCase()) {
      section.style.display = "block";
      setContent(section);
    } else {
      section.style.display = "none";
    }
  }
}

function setContent(section) {
  if (section.id == "home") {
    removeAllContent();
    setHomeContent();
  } else if (section.id == "nieuw") {
    removeAllContent();
    setNieuwContent();
  } else if (section.id == "zoek") {
    removeAllContent();
    setZoekContent();
  }
}
function removeAllContent() {
  for (let section of document.getElementsByTagName("section")) {
    section.innerHTML = "";
  }
}
function setHomeContent() {
  let section = document.getElementById("home");
  let html = `<div class="container justify-content"> 
            <h1>Home</h1>
            <div class ="row">
  `;
  REST.getObjects().then(function(data) {
    data.forEach(
      e =>
        (html += ` <div class="col">
                    <div class="card">
                        <div class="card-body>
                            <h5 class="card-title">${e.id}</h5>
                            <p class="card-text">${e.field1}</p>
                            <p class="card-text">${e.image}</p>
                            <p class="card-text"></p>
                        </div>    
                    </div> 
</div>
    `)
    );
    section.innerHTML = html;
  });
}

function setNieuwContent() {
  let section = document.getElementById("nieuw");
  let html = `
  
<form class="container justify-content">
<h1>Nieuwe object</h1>
  <div class="form-group">
    <label>Object field 1</label>
    <input type="text" class="form-control" id="field1" placeholder="Enter field 1" valid>
  </div>
    <div class="form-group">
    <label>Object field 2</label>
    <input type="text" class="form-control" id="field2" placeholder="Enter field 2" valid>
  </div>
    <div class="form-group">
    <label>Object field 3</label>
    <input type="text" class="form-control" id="field3" placeholder="Enter field 3 in DD/MM/YYYY format" valid>
  </div>
    <div class="form-group">
    <label for="exampleFormControlFile1">Add Object image here</label>
    <input type="file" class="form-control-file" id="image">
  </div>
  <span id = "error">
  
  </span>
  <div class = "container">
  <button id="submit" type="submit" class="btn btn-primary btn-block">Submit</button>
  </div>

</form>
`;

  section.innerHTML = html;
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    try {
      let fields = validateForm();
      doPOSTrequest(fields);
      setNieuwContent();
    } catch (error) {
      showErrorMessage(error);
    }
  });
}
function showErrorMessage(errorMessage) {
  document.getElementById("error").innerHTML = `
  <div class = "form-error">${errorMessage}</div>
  `;
}

function validateForm() {
  let field1 = document.getElementById("field1").value;
  let field2 = document.getElementById("field2").value;
  let date_field3 = moment(
    document.getElementById("field3").value,
    "DD/MM/YYYY",
    true
  );
  let image = document.getElementById("image").files[0];
  if (image === undefined || image == "") {
    image = "";
  } else {
    image = image.name;
  }

  let throwError = false;
  let errorMessage =
    "Form submission failed. The following field(s) are empty or invalid:\n";
  if (field1 === undefined || field1 == "") {
    errorMessage += "field 1, ";
    throwError = true;
  }
  if (field2 === undefined || field2 == "") {
    errorMessage += "field 2, ";
    throwError = true;
  }
  if (
    date_field3 === undefined ||
    date_field3 == "" ||
    !date_field3.isValid()
  ) {
    errorMessage += "field 3, ";
    document.getElementById("field3").setCustomValidity("Invalid field");
    throwError = true;
  }
  if (throwError) {
    errorMessage = errorMessage.substring(0, errorMessage.length - 2);
    throw Error(errorMessage);
  }
  return [field1, field2, date_field3.format("DD/MM/YYYY"), image];
}

function doPOSTrequest(fields) {
  REST.getObjects().then(function(data) {
    let objects = data;
    let id = parseInt(Math.max(...objects.map(obj => obj.id))) + 1;
    let field1 = fields[0];
    let field2 = fields[1];
    let field3 = fields[2];
    let image = fields[3];

    let obj = new TemplateObject(id, field1, field2, field3, image);
    REST.postObject(obj);
  });
}

function setZoekContent() {
  let section = document.getElementById("zoek");
  let html = `
  <div class="container justify-content">
  <h1>Zoeken</h1>

  
<div class="input-group mb-3">
<input type="text" id="filter" class="form-control" placeholder="Zoeken..." aria-label="Zoeken..." aria-describedby="basic-addon2">
</div>

  <table id = "dataTable" class="table">

  </table>
  `;
  section.innerHTML = html;
  document.getElementById("filter").addEventListener("input", filterTable);
  REST.getObjects().then(function(data) {
    buildTable(data);
  });
}
function filterTable() {
  let filter = document.getElementById("filter").value;
  REST.getObjects().then(function(data) {
    let results = [];
    results.push(
      ...data.filter(
        e =>
          e.id == filter ||
          e.field1.toLowerCase().includes(filter.toLowerCase())
      )
    );
    buildTable(results);
  });
}

function buildTable(data) {
  let table = document.getElementById("dataTable");
  let html = `
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Field 1</th>
      <th scope="col">Field 2</th>
      <th scope="col">Field 3</th>
    </tr>
  </thead>
  <tbody>`;
  data.forEach(
    e =>
      (html += `<tr>
      <th scope="row">${e.id}</th>
      <td>${e.field1}</td>
      <td>${e.field2}</td>
      <td>${e.field3}</td>
    </tr>
    `)
  );
  html += ` </tbody>`;
  table.innerHTML = html;
}

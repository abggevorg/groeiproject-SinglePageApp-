import "bootstrap/dist/css/bootstrap.css";
import * as REST from "../REST/restclient.js";
import { TemplateObject } from "../Model/TemplateObject.js";

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

  REST.getObjects().then(function(data) {
    let objects = data;
    let html = `<div class="container justify-content"> 
            <h1>Home</h1>
            <div class ="row">
  `;
    objects.forEach(
      e =>
        (html += ` <div class="col">
                    <div class="card">
                        <div class="card-body>
                            <h5 class="card-title">${e.id}</h5>
                            <p class="card-text">${e.field1}</p>
                            <p class="card-text">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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
    <input type="text" class="form-control" id="field1" placeholder="Enter field 1">
  </div>
    <div class="form-group">
    <label>Object field 1</label>
    <input type="text" class="form-control" id="field2" placeholder="Enter field 1">
  </div>
    <div class="form-group">
    <label>Object field 1</label>
    <input type="text" class="form-control" id="field3" placeholder="Enter field 1">
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
      validateForm();
      doPOSTrequest();
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
  let field3 = document.getElementById("field3").value;
  let throwError = false;
  let errorMessage =
    "Form submission failed. The following field(s) are empty:\n";
  if (field1 === undefined || field1 == "") {
    errorMessage += "field 1, ";
    throwError = true;
  }
  if (field2 === undefined || field2 == "") {
    errorMessage += "field 2, ";
    throwError = true;
  }
  if (field3 === undefined || field3 == "") {
    errorMessage += "field 3, ";
    throwError = true;
  }
  if (throwError) {
    errorMessage = errorMessage.substring(0, errorMessage.length - 2);
    throw Error(errorMessage);
  }
}

function doPOSTrequest() {
  REST.getObjects().then(function(data) {
    let objects = data;
    let id = parseInt(Math.max(...objects.map(obj => obj.id))) + 1;
    let field1 = document.getElementById("field1").value;
    let field2 = document.getElementById("field2").value;
    let field3 = document.getElementById("field3").value;
    let image = document.getElementById("image").files[0];
    let imageName;
    if (image === undefined || image == "") {
      imageName = "";
    } else {
      imageName = document.getElementById("image").files[0].name;
    }
    let obj = new TemplateObject(id, field1, field2, field3, imageName);
    REST.postObject(obj);
  });
}

function setZoekContent() {
  let section = document.getElementById("zoek");
  let html = `
  <div class="container justify-content">
  <h1>Zoeken</h1>

  
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Zoeken..." aria-label="Zoeken..." aria-describedby="basic-addon2">
<div class="input-group-append">
  <button class="btn btn-outline-secondary" type="button">Zoeken</button>
</div>
</div>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Field 1</th>
      <th scope="col">Field 2</th>
      <th scope="col">Field 3</th>
    </tr>
  </thead>
  <tbody>
  `;
  let objects;
  REST.getObjects().then(function(data) {
    objects = data;
  });

  objects.forEach(
    e =>
      (html += `<tr>
      <th scope="row">${e.id}</th>
      <td>${e.field1}</td>
      <td>${e.field2}</td>
      <td>${e.field3}</td>
    </tr>
    `)
  );
  html += ` </tbody>
  </table>`;
  section.innerHTML = html;
}

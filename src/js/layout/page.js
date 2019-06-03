import "bootstrap/dist/css/bootstrap.css";
import * as REST from "../REST/restclient";
import { kunstenaar } from "../Model/TemplateObject.js";
import * as addEvent from "./eventListeners.js";
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
    addEvent.toSubmitButton();
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
    data = data.map(e => kunstenaar.create(e));

    data.forEach(
      e =>
        (html += ` <div class="col">
                    <div class="card border border-info mx-2 my-3">
                        <img class="card-img-top ml-3 mt-3" src="${REST.getImageURL(
                          e
                        )}">
                        <div class="card-body mx-2 my-2">
                            <h5 class="card-title">User ID:${e.id}</h5>
                            <p class="card-text"> Name: ${e.first_name}</p>
                            <p class="card-text"> Firstname: ${e.last_name}</p>
                            <p class="card-text">Birthday: ${
                              e.birthday_date
                            }</p>
                            <p class="card-text">Nationality: ${e.country}</p>
                            <p class="card-text"></p>
                        </div>    
                    </div> 
</div>
    `)
    );

    section.innerHTML = html;
  });
}

export function setNieuwContent() {
  let section = document.getElementById("nieuw");
  let html = `
<form class="container justify-content">
<h1>Nieuwe object</h1>
  <div class="form-group">
    <label>Firstname</label>
    <input type="text" class="form-control" id="first_name" placeholder="Enter field 1" valid>
  </div>
    <div class="form-group">
    <label>Lastname</label>
    <input type="text" class="form-control" id="last_name" placeholder="Enter field 2" valid>
  </div>
    <div class="form-group">
    <label>Birthday</label>
    <input type="text" class="form-control date" id="birthday_date" placeholder="Enter field 3 in DD/MM/YYYY format" valid>
  </div>
  </div>
  <div class="form-group">
  <label>Country</label>
  <input type="text" class="form-control date" id="country" placeholder="This fild can be empty" valid>
</div>
    <div class="form-group">
    <label for="exampleFormControlFile1">Add Object image here</label>
    <input type="file" class="form-control-file" id="image">
  </div>
  <span id = "validationMessage">
  
  </span>
  <div class = "container">
  <button id="submit" type="submit" class="btn btn-primary btn-block">Submit</button>
  </div>

</form>
`;
  section.innerHTML = html;
}

/* als validatie goed is zal doPOSTrequest uitgeroepen worden met
een array vanfilds */
export async function doPOSTrequest(fields) {
  //alle objects nemen om te zien welke de laatse id is endan +1 doen
  let id;
  REST.getObjects().then(function(data) {
    let objects = data;
    id = parseInt(Math.max(...objects.map(obj => obj.id))) + 1;
  });
  console.log(fields);

  //filds die we hebben gekregen van validation
  let first_name = fields[0];
  let last_name = fields[1];
  let birth_date = fields[2];
  let image = fields[3];
  let country = fields[4];
  let obj;

  //als image leg is (wat altijd zal zijn) image mag leg blijven
  // if (image === undefined || image == "") {
  image = "";
  obj = new kunstenaar(id, first_name, last_name, birth_date, image, country);
  REST.postObject(obj);

  /* } else {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(image);
    fileReader.onloadend = () => {
      image = fileReader.result;
      obj = new kunstenaar(
        id,
        first_name,
        last_name,
        birth_date,
        image,
        country
      );
      REST.postObject(obj);
    };*/
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
    data.forEach(e => console.log(e));

    buildTable(data);
  });
}
function filterTable() {
  let filter = document.getElementById("filter").value;
  REST.getObjects().then(function(data) {
    data = data.map(e => kunstenaar.create(e));
    let results = [];
    results.push(
      ...data.filter(
        e =>
          e.id == filter ||
          e.first_name.toLowerCase().includes(filter.toLowerCase()) ||
          e.birth_date.includes(filter)
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
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Birthday</th>
      <th scope="col">Nationality</th>
    </tr>
  </thead>
  <tbody>`;
  data = data.map(e => kunstenaar.create(e));
  data.forEach(
    e =>
      (html += `<tr>
      <th scope="row">${e.id}</th>
      <td>${e.first_name}</td>
      <td>${e.last_name}</td>
      <td>${e.birthday_date}</td>
      <td>${e.country}</td>
      </tr>
    `)
  );
  html += ` </tbody>`;
  table.innerHTML = html;
}

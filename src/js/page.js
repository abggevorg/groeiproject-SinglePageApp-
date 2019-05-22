import "bootstrap/dist/css/bootstrap.css";
import * as REST from "./restclient.js";
import { TemplateObject } from "./TemplateObject.js";

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
  REST.testGetObjects().forEach(
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
  <div class = "container">
  <button id="submit" type="submit" class="btn btn-primary btn-block">Submit</button>
  </div>
</form>
`;

  section.innerHTML = html;
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    doPOSTrequest();
  });
}
function doPOSTrequest() {
  let id = Math.max(REST.testGetObjects().map(obj => obj.id)) + 1;
  let field1 = document.getElementById("field1");
  let field2 = document.getElementById("field2");
  let field3 = document.getElementById("field3");
  let image = document.getElementById("image");
  let obj = new TemplateObject(id, field1, field2, field3, image);
  REST.testPostObject(obj);
}

function setZoekContent() {
  let section = document.getElementById("zoek");
  let html = `
  <div class="container justify-content">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  `;

  REST.testGetObjects().forEach(
    e =>
      (html += `<tr>
      <th scope="row">${e.id}</th>
      <td>${e.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    `)
  );
  html += ` </tbody>
  </table>`;
  console.log(html);
  section.innerHTML = html;
}

import "bootstrap/dist/css/bootstrap.css";
import * as REST from "./restclient.js";

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
                            <p class="card-text">${e.name}</p>
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
<<<<<<< HEAD
  section.innerHTML = html;
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
`;
=======
>>>>>>> ac8d1900434dab56de17fba4f38437dc537a36f5
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
  let obj = new TemplateObject();
}
<<<<<<< HEAD
=======

function setZoekContent() {}
>>>>>>> ac8d1900434dab56de17fba4f38437dc537a36f5

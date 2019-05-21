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

  console.log(section.innerHTML);
}

function setNieuwContent() {}
function setZoekContent() {}

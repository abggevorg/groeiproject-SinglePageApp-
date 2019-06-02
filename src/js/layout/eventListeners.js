import * as pageManipulation from "./page.js";
import * as formValidator from "./validation.js";
//dit gebeurt maar een keer (in het begin van een )
export function addEventstoNavbar() {
  for (let nav of document.getElementsByClassName("nav-link")) {
    if (nav.innerText.toLowerCase() == "home") {
      nav.classList.add("active");
      pageManipulation.setPageContent(nav);
    }
    nav.addEventListener("click", selectNavItem);
  }
}
function selectNavItem(navItem) {
  for (let nav of document.getElementsByClassName("nav-link")) {
    nav.classList.remove("active");
  }
  navItem.target.classList.add("active");
  pageManipulation.setPageContent(navItem.target);
}

//eventlistener for button (anoniem functie to listener)
export function toSubmitButton() {
  document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    try {
      let fields = formValidator.validateForm();
      //doepost requist moet in een andere class zijn
      pageManipulation.doPOSTrequest(fields);
      pageManipulation.setNieuwContent();
      document.getElementById("validationMessage").innerHTML = `
    <div class = "form-error alert alert-success" role="alert" >Object is successfully created</div>
    `;
    } catch (error) {
      showErrorMessage(error);
    }
  });
}
function showErrorMessage(errorMessage) {
  document.getElementById("validationMessage").innerHTML = `
<div class = "form-error alert alert-danger" role="alert" >${errorMessage}</div>
`;
}

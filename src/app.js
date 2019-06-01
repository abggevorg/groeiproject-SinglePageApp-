import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as addEvents from "./js/layout/eventListeners.js";

function onLoadFunctions() {
  addEvents.toNavbar();
}
window.onload = onLoadFunctions;

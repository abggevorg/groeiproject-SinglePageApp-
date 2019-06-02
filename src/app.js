import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";
import * as eventListeners from "./js/layout/eventListeners.js";

function onLoadFunctions() {
  eventListeners.addEventstoNavbar();
}
window.onload = onLoadFunctions;

import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as navManipulation from "./js/layout/navbar";


function onLoadFunctions() {
  navManipulation.addEventsToNavbar();
}
window.onload = onLoadFunctions;

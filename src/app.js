/*import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(data => console.log(data));

*/
function onLoadFunctions() {
  let home = document.getElementById("#start");
  home.className = "nav-link active";
}
window.onload = onLoadFunctions;

import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as REST from "./js/restclient";

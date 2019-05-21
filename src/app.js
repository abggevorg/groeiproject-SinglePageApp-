import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as REST from "./js/restclient";
import * as navManipulation from "./js/navbar";

/*import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(data => console.log(data));

*/
var tab;
function onLoadFunctions() {
  let home = document.getElementById("#home");
  navManipulation.selectNavItem(home);
  navManipulation.addEventsToNavbar();
}
window.onload = onLoadFunctions;

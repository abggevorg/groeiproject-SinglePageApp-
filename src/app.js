import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as navManipulation from "./js/layout/navbar";

/*import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(data => console.log(data));

*/
function onLoadFunctions() {
  navManipulation.addEventsToNavbar();
}
window.onload = onLoadFunctions;

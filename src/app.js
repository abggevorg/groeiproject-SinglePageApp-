/*import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(data => console.log(data));

*/
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import * as REST from "./js/restclient";
let url = REST.RESTurlBuilder(20);
let options = REST.RESToptionsBuilder("GET");
console.log(options);
console.log(url);

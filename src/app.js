/*import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(data => console.log(data));

*/
import "./css/style.css";

import * as func from "./js/restclient";

var fatching = func.fetchFirstTodo();
fatching.then(function(data) {
  document.getElementById("id").value = data.id;
  document.getElementById("title").value = data.title;
  document.getElementById("completed").checked = data.completed;
  console.log(data);
});

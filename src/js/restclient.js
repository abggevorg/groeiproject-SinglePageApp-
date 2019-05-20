export function fetchFirstTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/12").then(
    function(response) {
    return response.json();
  });
}

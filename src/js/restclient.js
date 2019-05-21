const OBJECTS_URL = "http://localhost:3000/objects";

export async function postObject(obj) {
  try {
    let response = await fetch(OBJECTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    });
    if (!response.ok) {
      throw Error(
        "Unable to POST the object: " + response.status + " " + response
      );
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteObject(id) {
  try {
    let response = fetch(OBJECTS_URL + "/" + id, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw Error("Unable to get object from id " + id);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getObject(id) {
  try {
    let response = await fetch(OBJECTS_URL + "/" + id);
    if (!response.ok) {
      throw Error("Unable to get object from id " + id);
    }
    return response.json();
  } catch (error) {}
}

export async function getObjects() {
  try {
    let response = await fetch(OBJECTS_URL);
    if (!response.ok) {
      throw Error(
        "Unable to GET the objects: " +
          response.status +
          " " +
          response.statusText
      );
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export function testGetObjects() {
  return [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "fourth" },
    { id: 5, name: "fift" },
    { id: 6, name: "sixt" },
    { id: 7, name: "sevent" },
    { id: 8, name: "eighth" },
    { id: 9, name: "ninth" },
    { id: 10, name: "tenth" },
    { id: 11, name: "eleventh" },
    { id: 12, name: "twelfth" },
    { id: 13, name: "thirteenth" },
    { id: 14, name: "fourteenth" },
    { id: 15, name: "fifteenth" }
  ];
}

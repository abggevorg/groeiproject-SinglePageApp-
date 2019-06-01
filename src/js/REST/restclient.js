const BASE_URL = "http://localhost:3000/";
const OBJECTS_URL = BASE_URL + "objects";

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
      throw Error("Unable to POST the object: " + response.status);
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
      throw Error("Unable to get object from id: " + id);
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
      throw Error("Unable to get object from id: " + id);
    }
    return response.json();
  } catch (error) {}
}

export async function getObjects() {
  console.log("bener");
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
    console.log(response.json);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export function getImageURL(obj) {
  if (obj.image === undefined || obj.image == "") {
    return BASE_URL + "anonymous.jpg";
  }
  return BASE_URL + obj.image;
}

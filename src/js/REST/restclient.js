const BASE_URL = "http://localhost:3000/";
const PUBLISHERS_URL = BASE_URL + "publishers";

export async function postObject(obj) {
  try {
    let response = await fetch(PUBLISHERS_URL, {
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
    let response = fetch(PUBLISHERS_URL + "/" + id, {
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
    let response = await fetch(PUBLISHERS_URL + "/" + id);
    if (!response.ok) {
      throw Error("Unable to get object from id: " + id);
    }
    return response.json();
  } catch (error) {}
}

export async function getObjects() {
  try {
    let response = await fetch(PUBLISHERS_URL);
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

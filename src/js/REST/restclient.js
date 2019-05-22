import { TemplateObject } from "../Model/TemplateObject.js";

const OBJECTS_URL = "http://localhost:3000/objects";
let objects = [
  new TemplateObject(1, "a", "b", "c", "image"),
  new TemplateObject(2, "a", "b", "c", "image"),
  new TemplateObject(3, "a", "b", "c", "image"),
  new TemplateObject(4, "a", "b", "c", "image"),
  new TemplateObject(5, "a", "b", "c", "image"),
  new TemplateObject(6, "a", "b", "c", "image"),
  new TemplateObject(7, "a", "b", "c", "image"),
  new TemplateObject(8, "a", "b", "c", "image"),
  new TemplateObject(9, "a", "b", "c", "image"),
  new TemplateObject(10, "a", "b", "c", "image"),
  new TemplateObject(11, "a", "b", "c", "image"),
  new TemplateObject(12, "a", "b", "c", "image"),
  new TemplateObject(13, "a", "b", "c", "image"),
  new TemplateObject(14, "a", "b", "c", "image"),
  new TemplateObject(15, "a", "b", "c", "image")
];

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
  return objects;
}
export function testPostObject(obj) {
  objects.push(obj);
}

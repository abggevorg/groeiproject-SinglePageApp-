const OBJECTS_URL = "http://localhost:3000/objects";

export async function postObject(obj) {
  try {
    let response = await fetch(OBJECTS_URL, {
      method: "POST",
      headers: {
        //belangrijk! Anders weet de restserver niet wat voor data binnenkomt.Kan 400 Bad Request teruggeven of de request fout afhandelen
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj) //We zetten het JavaScript object om naar een JSON string en plaatsen die in de body van de HTTP Request
    });
    if (!response.ok) {
      //als er een antwoord komt wordt de post als gelukt beschouwd (zelfs wanneer het antwoord 404 is bv)
      //we moeten dan dus checken op de response.ok
      throw Error(
        "Unable to POST the person: " +
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

export async function deleteObject(id) {
  try {
    let response = fetch(OBJECTS_URL + "/" + id, {
      method: "DELETE"
    });
    if (!response.ok) {
      throw Error("Unable to get person from id " + id);
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
      throw Error("Unable to get person from id " + id);
    }
    return response.json();
  } catch (error) {}
}

export async function getObjects() {
  try {
    let response = await fetch(OBJECTS_URL);
    if (!response.ok) {
      throw Error(
        "Unable to GET the persons: " +
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

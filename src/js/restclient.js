export async function makeREStcall( url, options) {
    try {
        let response = await fetch(url, options);
        if (!response.ok) {
            throw Error("fetch failed");
        }
        return response;
    } catch (error) {
        console.log(error);
    }
}
export function RESToptionsBuilder(method,instance){
    let options;
    if (method.toUpperCase() == "POST"){
        options =
            {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(person)
            };
    }else{
        options = 
        {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
    return options;
}

const url = "http://localhost:8080";
// const url1= "http://192.168.86.14";
// const url2= "http://192.168.43.93";


export function getPersonList(){
    return fetch (`${url}/person/list`);
}

export function postPerson(data){
    return fetch (`${url}/person/create`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function updatePerson(data){
    return fetch(`${url}/person/modify`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

export function removePerson(email){
    return fetch(`${url}/person/delete/${email}`,{
        method: "delete",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    });
}

export function displayPerson(email){
    return fetch(`${url}/person/email?email=${email}`);
}

export function displayPersonById(id){
    return fetch(`${url}/person/id?id=${id}`);
}

export function verifPerson(email) {
    return fetch(`${url}/person/verification/email?email=${email}`);
}

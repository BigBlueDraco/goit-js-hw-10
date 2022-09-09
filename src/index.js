import './css/styles.css';

const DEBOUNCE_DELAY = 300;



function fetchCountryByName(name){
    const baseUrl ="https://restcountries.com/v3.1/";
    const endPoint ="name/"
    return fetch(`${baseUrl}${endPoint}${name}`)
    .then(resp => {
    if(!resp.ok){
        throw new Error();
    }
    return resp.json();
    })
    .catch(console.log);
}

console.log(fetchCountryByName("unit").then(data => console.log(data.length)))


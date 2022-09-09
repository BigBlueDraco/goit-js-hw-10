import './css/styles.css';
import { fetchCountriesByName } from "./js/fetchCountriesByName";
const countryList = document.querySelector(".country-list")
const DEBOUNCE_DELAY = 300;

console.log(fetchCountriesByName("unit").then(data =>{
    const {length} = data;
    console.log(data);
    displayCountries(data);
}))

function displayCountries(arr =[]){
    const {flags:{svg: flagSvg, png: flagPng}, name:{common: commonName}} =arr[0];
    console.log(flagSvg);
    console.log(commonName)
    console.log(arr.reduce((acc, elem) => {
        const {flags:{svg: flagSvg, png: flagPng}, name:{common: commonName}} =elem;
        acc.push([flagPng, flagSvg, commonName]);
        return acc;
    }, []));
}


import './css/styles.css';
import { displayCountries } from './js/displayCountries';
import debounce from 'lodash.debounce';
// const countryList = document.querySelector(".country-list")
const searchBox = document.querySelector("#search-box")
const displayCountriesOptions ={quantity: 10, countryPanel: true}
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener("input", debounce((event)=>{
    displayCountries(event.target.value, displayCountriesOptions);    
},DEBOUNCE_DELAY))
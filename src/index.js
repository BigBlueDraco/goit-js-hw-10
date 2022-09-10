import './css/styles.css';
import { displayCountries } from './js/displayCountries';
import debounce from 'lodash.debounce';
// const countryList = document.querySelector(".country-list")
const searchBox = document.querySelector("#search-box")
const displayCountriesOptions ={quantity: 20, countryPanel: true}
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener("input", debounce((event)=>{
    if(event.target.value.trim()){
            displayCountries(event.target.value, displayCountriesOptions);
    }       
},DEBOUNCE_DELAY))
import Notiflix from "notiflix";
import { fetchCountriesByName } from "./fetchCountriesByName";

export function displayCountries(name ="", options= {quantity: 10, countryPanel: true}){
    const countryInfo = document.querySelector(".country-info")
    const countryList = document.querySelector(".country-list")

    countryInfo.style.display ="none"
    countryList.style.display ="none";
    countryInfo.innerHTML ="";
    countryList.innerHTML ="";

    if(!name.trim()|| options.quantity<=0 || /\d/.test(name)) return;

    fetchCountriesByName(name).then(data =>{
    const {length} = data; 
    if(length===1&&options.countryPanel){ 
        countryInfo.style.display ="flex"

        return countryInfo.innerHTML = countriInfoMarkup(data); 
    }
    if(length<options.quantity){
        countryList.style.display ="flex"
        return countryList.innerHTML = countriesListMarkup(data);  
    }
    return Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
}).catch((err) => Notiflix.Notify.failure("Oops, there is no country with that name"))
}


function countriesListMarkup(arr =[]){
    return arr.reduce(
        (acc, elem) => {
            console.log(elem)
            const {flags:{svg: flagSvg}, name:{official: officialName}} =elem;
            acc += `<li class="country-list__item"><div class="country-list__title"><img src="${flagSvg}" alt="" class="country-list__img" /><p class="country-list__name">${officialName}</p></div></li>`;
        return acc;
    }, "");
}

function countriInfoMarkup(arr =[]){
    return arr.reduce(
        (acc, elem) => {
            const {flags:{svg: flagSvg}, name:{official: officialName}, capital, languages, population} =elem;
            acc += `
            <div class="country-info__title">
                <img src="${flagSvg}" alt="" class="country-info__img" />
                <p class="country-info__name">${officialName}</p>
            </div>
            <p><span class="country-info__category">Capital:</span> ${capital}</p>
            <p><span class="country-info__category">Population:</span> ${population}</p>
            <p><span class="country-info__category">Languages:</span> ${Object.values(languages).join(", ")}</p>`
            return acc;
        }, "")
}
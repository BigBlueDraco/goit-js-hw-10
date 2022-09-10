export function fetchCountriesByName(name = "") {
    
    if(name.trim()){
    const validName = name.trim().toLocaleLowerCase();
    const baseUrl = "https://restcountries.com/v3.1/";
    const endPoint = "name/";
    const filters = "?fields=name,capital,population,flags,languages"
    return fetch(`${baseUrl}${endPoint}${validName}${filters}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error("404");
            }
            return resp.json();
        })
        .catch(console.log); 
    }
    throw new Error("Empty string");
}

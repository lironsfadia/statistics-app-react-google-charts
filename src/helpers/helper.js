import countryList from 'react-select-country-list'

var stringCache = new Map()

export function isValid(string) {
    const regex = new RegExp("^[a-zA-Z ]*$");
    let isInCountryList = false
    if(!stringCache.has(string)){
        isInCountryList = countryList().getData().some(country => country.label === string);
        stringCache.set(string, isInCountryList)
    } else {
        isInCountryList = stringCache.get(string)
    }
    
    return string !== null &&
        regex.test(string) &&
        isInCountryList;
}
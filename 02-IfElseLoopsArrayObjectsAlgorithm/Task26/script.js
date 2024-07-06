let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

let aCountries = countries.filter(country => country.toLowerCase().startsWith('a') && country.toLowerCase().endsWith('a'));
console.log(aCountries);

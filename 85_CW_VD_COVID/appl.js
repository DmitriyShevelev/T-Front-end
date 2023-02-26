fetch("https://covid-api.mmediagroup.fr/v1/history?status=deaths")
.then(response => response.json()).then(data => console.log(data));

// fetch("https://covid-api.mmediagroup.fr/v1/cases")
// .then(response => response.json()).then(data => console.log(data));

// fetch("https://covid-api.mmediagroup.fr/v1/vaccines")
// .then(response => response.json()).then(data => console.log(data));

// fetch("https://covid-api.mmediagroup.fr/v1/history?status=Confirmed")
// .then(response => response.json()).then(data => console.log(data));

async function getStatistics () {
    const data = await fetch("https://covid-api.mmediagroup.fr/v1/cases")
    .then(response => response.json());
    const allCountries = Object.values(data).map(c => c.All).filter(c => !!c.continent);

    const cases = _.groupBy(allCountries, 'continent');

    const vaccines = await getVaccines();
    const continentGroups = _.merge({}, cases, vaccines);

    const res = Object.entries(continentGroups).map(oneContinentStatistics);
    return res;
}/*pv1*/
function oneContinentStatistics(continent) {
    return continent[1].reduce((res, statObj) => {
        res.confirmedSum += statObj.confirmed;

    })
}
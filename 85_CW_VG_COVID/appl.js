// fetch("https://covid-api.mmediagroup.fr/v1/history?status=deaths")
// .then(response => response.json()).then(data => console.log(data));

// fetch("https://covid-api.mmediagroup.fr/v1/cases")
// .then(response => response.json()).then(data => console.log(data));

fetch("https://covid-api.mmediagroup.fr/v1/vaccines")
.then(response => response.json()).then(data => console.log(data));
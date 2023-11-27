let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById('county-inp');

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
         console.log(data[0]);
        // console.log(data[0].capital[0]);
        // console.log(data[0].flags.svg);
        // console.log(data[0].name.common);
        // console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        // console.log(data[0].maps.googleMaps)
        
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital : </h4>
                <span>${data[0].capital[0]} </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population : </h4>
                <span>${data[0].population} </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper"> 
                <h4>Continents : </h4>
                <span>${data[0].continents[0]} </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currencies : </h4>
                <span>${Object.keys(data[0].currencies)[0]} - ${data[0].currencies[Object.keys(data[0].currencies)].name} </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common languages : </h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")} </span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper maps">
                <h4>Open globle maps : </h4>
                </div>
                <div>
                <a href="${data[0].maps.googleMaps}"><img src="https://www.mapsofworld.com/maps/world-map.jpg"/></a>
            </div>
        </div>
        
        `;
    })

    .catch( () =>{
        if (countryName.length == 0) {
            result.innerHTML = `<h3>The input filed cannot be empty</h3>`;
        }
        else{
            result.innerHTML = `<h3>Please enter a valid country name</h3>`;
        }
    })
});

// async function getUser(place) {
//     const country_code = "US"
//     const api_url = "https://www.travel-advisory.info/api"
//     const country_api_url = `https://www.travel-advisory.info/api?countrycode=${country_code}`
    
//     // const response = await fetch(api_url);
//     const response = await fetch(country_api_url);
    
//     const data = await response.json();
//     console.log(data)
    
//     time = await data.datetime
//     // arr = Array.from(time)
//     // arr.splice(0, 11)
//     // arr.toString()
//     // timezone = (arr.splice(0, 5)).join("");
//     document.getElementById("time").innerText = `${place}'s INFORMATION = ${time} ${data.timezone_abbreviation}`
// }

async function getUser(name) {
    const api_url = `https://restcountries.com/v3.1/name/${name}`;

<<<<<<< Updated upstream
    // const response = await fetch(api_url);
    const response = await fetch(api_url);
    
    const data = await response.json();
    console.log(data)
    
    const population = data[0].population;
    const currency = data[0].currencies;
    // arr = Array.from(time)
    // arr.splice(0, 11)
    // arr.toString()
    // timezone = (arr.splice(0, 5)).join("");
    document.getElementById("time").innerText = `${name}'s INFORMATION: Population = ${population}`;
    //${currency}
}
=======
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        const country = data[0];

        // Extracting various information from the API response
        const countryName = country.name.common;
        const capital = country.capital ? country.capital[0] : "N/A";
        const population = country.population.toLocaleString();
        const region = country.region;
        const subregion = country.subregion || "N/A";
        const area = country.area.toLocaleString();
        const languages = Object.values(country.languages).join(", ");
        const timezone = country.timezones ? country.timezones[0] : "N/A";

        // Currency information
        const currencyData = Object.values(country.currencies)[0];
        const currencyName = currencyData ? currencyData.name : "N/A";
        const currencySymbol = currencyData ? currencyData.symbol : "";

        // Flag URL
        const flagUrl = country.flags.png;

        // HTML content to display all the information
        const infoHtml = `
            <h3>${countryName} Information</h3>
            <img src="${flagUrl}" alt="Flag of ${countryName}" style="width: 100px; height: auto;">
            <p><strong>Capital:</strong> ${capital}</p>
            <p><strong>Population:</strong> ${population}</p>
            <p><strong>Region:</strong> ${region}</p>
            <p><strong>Subregion:</strong> ${subregion}</p>
            <p><strong>Area:</strong> ${area} km²</p>
            <p><strong>Languages:</strong> ${languages}</p>
            <p><strong>Timezone:</strong> ${timezone}</p>
            <p><strong>Currency:</strong> ${currencyName} (${currencySymbol})</p>
        `;

        // Display the information in the designated element
        document.getElementById("time").style.display = "block";
        document.getElementById("time").innerHTML = infoHtml;
    } catch (error) {
        console.error("Error fetching country data:", error);
        document.getElementById("time").innerHTML = "Country information could not be retrieved.";
    }
}

>>>>>>> Stashed changes

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('name').style.top = y-60  + 'px'
        document.getElementById('name').style.left = x +10 + 'px'
    }
    const classes=e.className.baseVal.replace(/ /g, '.')         
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        // country.style.fill = "pink"
    })
    document.getElementById("name").style.opacity = 1
    
    document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        // country.style.fill = "#34A56F"
    })
    document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "#34A56F"
    })
    getUser(e.id)
})

})

// document.getElementById("searchBtn").addEventListener("click", function () {
//     country = document.getElementById("search").value
//     document.querySelectorAll(`.allPaths`).forEach(e => {
//         e.style.fill = "#ececec"
//     })
//     document.querySelectorAll(`#${country}`).forEach(e => {
//         e.style.fill = "red"
//     })
// })
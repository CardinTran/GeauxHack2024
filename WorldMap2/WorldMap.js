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
    const api_url = `https://restcountries.com/v3.1/name/${name}`

    // const response = await fetch(api_url);
    const response = await fetch(api_url);
    
    const data = await response.json();
    console.log(data)
    
    const population = data[0].population;

    // const currency = (data[0].currencies);
    let currencyDetails = ""; // Initialize an empty string for currency details
    // for (const key in currency) {
    //     if (currency.hasOwnProperty(key)) {
    //         const currencyName = currency[key].name;
    //         const currencySymbol = currency[key].symbol;
    //         console.log(`Currency: ${currencyName}, Symbol: ${currencySymbol}`);
    //         currencyDetails += `Currency: ${currencyName}, Symbol: ${currencySymbol}<br>`;

    const currency = data[0].currencies;
    for (var key in currency){//Because we don't know the name of the child we go through every child and find the name
        console.log(currency[key].name);   
    }
    console.log(currency);
    const languages = Object.values(data[0].languages);
    const demonym = (data[0].demonyms.eng.m);
    const timezones = data[0].timezones;

    const flag = data[0].flags.png;
    // const imgElement = document.getElementById("flag");
    // imgElement.src = flag;
    // console.log(imgElement);


    // arr = Array.from(time)
    // arr.splice(0, 11)
    // arr.toString()
    // timezone = (arr.splice(0, 5)).join("");
    document.getElementById("time").style.display = "block";
    const infoHtml = `${name}'s Information:<br>
    Timezone(s): ${timezones}<br>
    Demonym: ${demonym}<br>
    Language(s): ${languages}<br>
    Population: ${population}<br>

    Currency: ${currency[key].name}<br>

    <img src="${flag}" alt="Country Flag" style="width: 300px; height: auto;">`;
    // document.getElementById("time").innerText = `${name}'s INFORMATION: \n Population = ${population} \n Currency = ${currency[key].name} \n ${flag}`;
    document.getElementById("time").innerHTML = infoHtml;
    }

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
        document.getElementById("timeCont").style.display = "block";
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

// Select elements to work with
const toggleButton = document.getElementById("timeCont");
const dropDown = document.getElementById("time");

// Function to toggle the display of the extra information section
function toggleDropDown() {
  if (dropDown.style.display != "none") {
    console.log("click 1")
    dropDown.style.display = "none";
  } 
//   else {
//     console.log("click 2")

//     // toggleButton.textContent = "Show More"; // Update button text
//   }
}

// Attach event listener to the button
toggleButton.addEventListener("click", toggleDropDown);

// const Introduction = document.querySelector('.Introduction');

// document.addEventListener('DOMContentLoaded', (e)=>{
//     setTimeout(()=>{
//         document.getElementById("Introduction").style.display = 'none';
//     }, 2000);
// })

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 3000);

        setTimeout(()=>{
            intro.style.top='-100vh';
        }, 3700)
    })
})

// const elements = document.querySelectorAll('.count');
// const values = Array.from(elements).map(element => {
//     const value = parseInt(element.innerText.replace('Value: ', '')); // Extract the integer
//     return value; // Return the integer value
// });
// const countries = document.querySelectorAll('#allSvg .allPaths');
// const countryCount = countries.length;
// console.log(`Total number of countries: ${countryCount}`);

// const countryElements = document.querySelectorAll('.allPaths');
// const uniqueClasses = new Set();

// countryElements.forEach(element => {
//     uniqueClasses.add(element.className); // Adds class to the set
// });

// console.log(`Unique classes: ${Array.from(uniqueClasses)}`);

// const countries = document.querySelectorAll('#allSvg .allPaths');

// // Create an object to hold unique countries
// const uniqueCountriesMap = {};

// // Loop through the NodeList
// countries.forEach(country => {
//     const countryId = country.id; // or some unique attribute
    
//     // Check if the ID already exists in the map
//     if (!uniqueCountriesMap[countryId]) {
//         // If it doesn't exist, add it to the map
//         uniqueCountriesMap[countryId] = country;
//     }
// });

// // Convert the map values back to an array
// const uniqueCountries = Object.values(uniqueCountriesMap);

// // Log the unique countries
// console.log(`Total number of unique countries: ${uniqueCountries.length}`);

// // Optionally, if you want to remove the duplicates from the DOM, you can do that here
// // For example, remove all countries and re-add unique ones:
// const svgContainer = document.getElementById('allSvg');
// svgContainer.innerHTML = ''; // Clear the SVG

// uniqueCountries.forEach(country => {
//     svgContainer.appendChild(country.cloneNode(true)); // Clone and append each unique country
// });

// const countries = document.querySelectorAll('#allSvg .allPaths');

// // Create a Set to hold unique IDs
// const uniqueIds = new Set();

// // Loop through the NodeList
// countries.forEach(country => {
//     uniqueIds.add(country.id); // Add each ID to the Set
// });

// // Count unique IDs
// const countryCount = uniqueIds.size;
// console.log(`Total number of unique countries: ${countryCount}`);

const countries = document.querySelectorAll('#allSvg .allPaths');

// Create an object to count occurrences of each ID
const idCounts = {};

// Loop through the NodeList
countries.forEach(country => {
    const id = country.id;

    // Increment the count for this ID
    if (idCounts[id]) {
        idCounts[id]++;
    } else {
        idCounts[id] = 1;
    }
});

// Identify duplicates and count unique IDs
let uniqueCount = 0;
for (const id in idCounts) {
    if (idCounts[id] > 1) {
        console.log(`Duplicate ID found: ${id} (Count: ${idCounts[id]})`);
    } else {
        uniqueCount++;
    }
}

// Log total unique countries
console.log(`Total number of unique countries: ${uniqueCount}`);

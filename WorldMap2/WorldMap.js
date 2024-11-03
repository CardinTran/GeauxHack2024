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
    const currency = data[0].currencies;
    for (var key in currency){//Because we don't know the name of the child we go through every child and find the name
        console.log(currency[key].name);   
    }
    console.log(currency);

    const flag = data[0].flag;
    console.log(flag);
    // arr = Array.from(time)
    // arr.splice(0, 11)
    // arr.toString()
    // timezone = (arr.splice(0, 5)).join("");
    document.getElementById("time").style.display = "block";
    document.getElementById("time").innerText = `${name}'s INFORMATION: \n Population = ${population} \n Currency = ${currency[key].name} \n ${flag}`;
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
const api = {
    endpoint:'http://api.openweathermap.org/data/2.5/',
    key: '1975adb86bf9cd5604c34cfd95702ea7'
}
const input = document.querySelector('.input');
input.addEventListener('keypress', enter);

function enter(e){
    if(e.keyCode === 13){
        getInfo(input.value);
    }
}
async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json()
    
    displayResult(result);
}
function displayResult(result){
    console.log(result)
    let city = document.querySelector('.city');
    city.textContent = `${result.name}, ${result.sys.country}`;

    getOurDate();

    let temperature = document.querySelector('.temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelslike = document.querySelector('.feelslike');
    feelslike.innerHTML = `<span>Feels like:</span> ${Math.round(result.main.feels_like)}<span>°</span>`;

    let condition = document.querySelector('.condition');
    condition.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('.variation');
    variation.innerHTML = 'Min: '+`${Math.round(result.main.temp_min)}<span>°</span> ` + 'Max: '+`${Math.round(result.main.temp_max)}<span>°</span>`
}

function getOurDate(){
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day = days[myDate.getDay()];

    let today = myDate.getDate();
    
    let month = months[myDate.getMonth()]
    
    let years = myDate.getFullYear();
    
    let showDate = document.querySelector('.date');
    showDate.textContent =`${day}`+ ' ' +`${today}` + ' '+`${month}`+' '+ `${years}`;
}

const apiTwo = {
    endpoint:'https://www.abstractapi.com/api/ip-geolocation-api',
    key: 'a9ecc44ca1d34985a738889167b92cef'
}
console.log(apiTwo)
const inputTwo = document.querySelector('.input')
input.addEventListener('keypress', enter)

function displayResultTwo (result){
    let city = document.querySelector('.city')
    city.textContent=`${result.name}, ${result.sys.country}`
}


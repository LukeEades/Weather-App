let main = document.querySelector('main'); 
let loc = document.getElementById("loc"); 
let button = document.getElementById("enter"); 
let results = document.getElementById('result'); 
let locTitle = document.getElementById('location'); 
let tempCur = document.getElementById('temp'); 
let defaultLoc = "San Luis Obispo"; 
let forecast = document.getElementById('forecast'); 
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(); 

try{fetch(`http://api.weatherapi.com/v1/forecast.json?key=9ab67380d0b14cb2aa120218232005&q=${defaultLoc}&days=7&aqi=yes`,{mode: 'cors'}).then(function(response){
    if (response.status !== 200){
        throw new Error('not a valid location'); 
    }else{ 
        return response.json(); 
    }
})
.then(function(json){
    if(json !== null){
        console.log(json); 
        results.style.backgroundImage = `url(${json.current.condition.icon})`; 
        locTitle.innerHTML = `<div id = 'city'>${json.location.name}</div><div id = 'country'>${json.location.country}</div>`;  
        tempCur.children[0].innerHTML = json.current.temp_f + '℉';  
        for(let i = 0; i < json.forecast.forecastday.length; i++){
            let day = document.createElement('div'); 
            day.innerHTML = `<div class = "dayTitle">${weekdays[d.getDay() + i + 1]}</div><div class = "dayTemp">${json.forecast.forecastday[i].day.avgtemp_f}</div>`; 
            day.classList.add('day'); 
            forecast.appendChild(day); 
        }
    }else{
        throw new Error('problem parsing json'); 
    }
})}
catch(error){
    console.log(error);
}
window.addEventListener('keydown', e =>{
    if(e.code == "Enter"){
        try{fetch(`http://api.weatherapi.com/v1/forecast.json?key=9ab67380d0b14cb2aa120218232005&q=${loc.value}&days=7&aqi=yes`,{mode: 'cors'}).then(function(response){
            if (response.status !== 200){
                throw new Error('not a valid location'); 
            }else{
                return response.json(); 
            }
        })
        .then(function(json){
            if(json !== null){
                console.log(json); 
                results.style.backgroundImage = `url(${json.current.condition.icon})`; 
                locTitle.innerHTML = `<div id = 'city'>${json.location.name}</div><div id = 'country'>${json.location.country}</div>`;  
                tempCur.children[0].innerHTML = json.current.temp_f + '℉';  
                for(let i = 0; i < json.forecast.forecastday.length; i++){
                    let day = document.createElement('div'); 
                    day.innerHTML = `<div class = "dayTitle">${weekdays[d.getDay() + i + 1]}</div><div class = "dayTemp">${json.forecast.forecastday[i].day.avgtemp_f}</div>`; 
                    day.classList.add('day'); 
                    forecast.appendChild(day); 
                }
            }else{
                throw new Error('problem parsing json'); 
            }
        })}
        catch(error){
            console.log(error);
        }
    }
}); 



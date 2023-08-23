let main = document.querySelector('main'); 
let loc = document.getElementById("loc"); 
let button = document.getElementById("enter"); 
let results = document.getElementById('result'); 
let locTitle = document.getElementById('location'); 
let tempCur = document.getElementById('temp'); 
window.addEventListener('keydown', e =>{
    if(e.code == "Enter"){
        try{fetch(`http://api.weatherapi.com/v1/current.json?key=9ab67380d0b14cb2aa120218232005&q=${loc.value}&aqi=yes`,{mode: 'cors'}).then(function(response){
            if (response.status !== 200){
                throw new Error('not a valid location'); 
            }else{
                return response.json(); 
            }
        })
        .then(function(json){
            if(json !== null){
                console.log(json); 
                // results.textContent = json.current.feelslike_c; 
                // main.style.backgroundImage = `url(${json.current.condition.icon})`; 
                locTitle.innerHTML = `<div id = 'city'>${json.location.name}</div><div id = 'country'>${json.location.country}</div>`;  
                tempCur.children[0].innerHTML = json.current.temp_f;  
            }else{
                throw new Error('problem parsing json'); 
            }
        })}
        catch(error){
            console.log(error);
        }
    }
}); 



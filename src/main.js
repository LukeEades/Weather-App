let main = document.querySelector('main'); 
let loc = document.getElementById("loc"); 
let button = document.getElementById("enter"); 
let results = document.getElementById('result'); 
button.addEventListener('click', () =>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=9ab67380d0b14cb2aa120218232005&q=${loc.value}&aqi=yes`,{mode: 'cors'}).then(function(response){
        if (response.status !== 200){
            console.log('look like there was a problem'); 
        }else{
            return response.json(); 
        }
    })
    .then(function(json){
        console.log(json); 
        results.textContent = json.current.feelslike_c; 
        main.style.backgroundImage = `url(${json.current.condition.icon})`; 
    })
}); 


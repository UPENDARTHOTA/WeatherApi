let inputEle=document.getElementById("location-input")
let tempEle=document.getElementById("temp-value")
let locEle=document.getElementById("location")
let humEle=document.getElementById("hum")
let weatherdescEle=document.getElementById("weather-desc")
let btnEle=document.getElementById("btn")

const apikey ='1a9a773bb7c19eb02efc7535e5b14243';
btnEle.onclick=function(){
    if(inputEle.value=="")
    alert("please enter some location")
    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(res=>res.json())
        .then(data => {
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{humidity}=data.main
            const{description}=data.weather[0]
            tempEle.innerText=Math.floor(feels_like-273);
            locEle.innerText=name;
            weatherdescEle.innerText=description
            humEle.innerText=humidity

        })
        .catch(()=>{
            alert("enter valid location")
        })
        inputEle.value=""
    }
}
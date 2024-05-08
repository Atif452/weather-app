
let input=document.querySelector(".input")
let btn=document.querySelector(".btn")
let temperature=document.querySelector(".temp-result")
let humi=document.querySelector(".humidity-result")
let wind=document.querySelector(".wind-result")
let h1=document.querySelector(".h1")

let api="0c86dfbcccbfc06710025e5f5e124a2c"

btn.addEventListener("click" , function(){

let a=input.value
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=${api}`)
.then(function (response) {
    // handle success
    console.log(response.data);
    temperature.textContent=" "+ response.data.main.temp
    humi.textContent=" "+ response.data.main.humidity
    h1.textContent=a+" " + response.data.sys.country
    wind.textContent=" " + response.data.wind.speed
    
    h1.style.color="red"
})
.catch(function (error) {
      h1.textContent="not found"
    // handle error
    console.log(error);
  })

})
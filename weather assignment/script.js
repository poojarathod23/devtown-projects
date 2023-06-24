async function getWeather(){
    let city = document.getElementById('city').value

    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5180d70ab9ee17eabf1ce0596a868c92`);
    var data = await res.json();
    
    console.log(data);

    let container = document.getElementById('container')
    container.innerHTML = `
    <div class=" w-auto  lg:py-16 lg:px-12 mx-auto max-w-screen-xl md:items-center bg-blue-300 border rounded-lg border-black p-6" >
        <h2 class="text-3xl text-black-700">${data["name"]}</h2><br>
        <p class="text-xl text-black-600">coordinates : ${data["coord"]["lat"]}, ${data["coord"]["lon"]}</p><br>
        <p class="text-xl text-black-600">temperature : ${data["main"]["temp"]}</p><br>
        <p class="text-xl text-black-600">Weather : ${data["weather"][0]["main"]}</p><br>
        <p class="text-xl text-black-600">speed : ${data["wind"]["speed"]}</p><br>
    </div>
    `
}
getWeather();
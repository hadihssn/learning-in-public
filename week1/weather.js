const API_KEY = "41fe231f06f47c1129ffce80b396fed3";
const city = process.argv[2];

if (city == null){
    console.log('No city provided');
    process.exit(1);
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        //console.log("data:", data);
        console.log(`City: ${data.name}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s`);
    })
    .catch(error => console.log("Error:", error));
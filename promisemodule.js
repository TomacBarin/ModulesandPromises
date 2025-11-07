export function getWeather(sendWeather) {
    console.log("Från promisemodule.") 
    sendWeather.textContent = "Sidan laddar...";
    

    fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Systemfel. Försök senare.`);
        }
        return response.json();
    }
    )
    .then(data => {
        // console.log(data);
        const temp = data.current_weather.temperature;
        sendWeather.textContent = `${temp}.`;
        
    })
    .catch(error => {
        console.error("Något har gått fel", error);
        sendWeather.textContent = "Tyvärr, något har gått fel."
    } )
    
}
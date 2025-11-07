import { getWeather } from "./promisemodule.js";

const paraHtml = document.querySelector("#displayWeather");
const btnHtml = document.querySelector("#btn");

btnHtml.addEventListener("click", () => {
    console.log("Knapp har klickats på!")
    getWeather(paraHtml)

})
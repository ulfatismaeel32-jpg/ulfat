import { musum } from "./api.js";
async function showWheather() {
    let card = document.querySelector("#mosumCard");
    card.innerHTML = "<p>loading...</p>";
    try {
        const data = await musum();

        card.innerHTML =
            "<h1>karachi ka mousam</h1>" +
            "<p>weather : " +  karachiData.current.weather_code + " </p>" +

            "<h1>lahore ka mousum</h1>" +
            "<p>weather : " + lahoreData.current.weather_code + " </p>"
    }
    catch (error) {
        card.innerHTML = "<p>sorry network problem!!!</p>";
    }
}
showWheather();
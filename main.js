import { musum } from "./api.js";
import { dikhao } from "./render.js";

async function showWheather() {
    let card = document.querySelector("#mosumCard");
    card.innerHTML = "<p>loading...</p>";
    try {
        const data = await musum();
        dikhao(data);
    }
    catch (error) {
        card.innerHTML = "<p>sorry network problem!!!</p>";
    }
}
showWheather();

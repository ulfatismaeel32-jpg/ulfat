export function dikhao(data) {
    let card = document.querySelector("#mosumCard");
    card.innerHTML =
        "<h1>karachi ka mousam</h1>" +
        "<p>weather : " + data.karachi + " </p>" +

        "<h1>lahore ka mousum</h1>" +
        "<p>weather : " + data.lahore + " </p>";
}

const btn = document.querySelector(".app__dice-btn");
const adviceId = document.querySelector(".app__advice-id");
const advice = document.querySelector(".app__advice")
const baseURL = "https://api.adviceslip.com/advice";

function fetchData() {
    fetch(baseURL + `?ts=${new Date().getTime()}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        adviceId.textContent = data["slip"]["id"];
        advice.textContent = "\"" + data["slip"]["advice"] + "\"";
    });
}

window.addEventListener("load", () => {
    fetchData();
});

btn.addEventListener("click", () => {
    fetchData();
});
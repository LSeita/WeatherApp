/* eslint-disable camelcase */
import parseInfo from "./parseInfo";
import getInfo from "./getInfo";
import displayWeather from "./displayWeather";
import "./style.css";

const input = document.getElementById("localInput");
const btn = document.getElementById("btn");
const overlay = document.getElementById("overlay");

// Calls the API with the desired place
btn.addEventListener("click", (e) => {
  overlay.style.display = "block";
  getInfo(input.value).then((res) => {
    overlay.style.display = "none";
    displayWeather(parseInfo(res));
  });
  e.preventDefault();
});

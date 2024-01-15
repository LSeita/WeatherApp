/* eslint-disable camelcase */
import parseInfo from "./parseInfo";
import getInfo from "./getInfo";
import displayWeather from "./displayWeather";
import "./style.css";

const input = document.getElementById("localInput");
const btn = document.getElementById("btn");

// Calls the API with the desired place
btn.addEventListener("click", (e) => {
  getInfo(input.value).then((res) => displayWeather(parseInfo(res)));
  e.preventDefault();
});

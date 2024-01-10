/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import { parse, format } from "date-fns";
import { enUS } from "date-fns/locale";
import parseInfo from "./parseInfo";
import getInfo from "./getInfo";
import "./style.css";

const input = document.getElementById("localInput");
const btn = document.getElementById("btn");

function displayWeather(place) {
  const localSpan = document.getElementById("local");
  const localdate = document.getElementById("date");
  const crntTemp = document.getElementById("crntTemp");
  const details = document.getElementById("details");
  const crntIcon = document.getElementById("crnt-img");

  localSpan.textContent = `${place.name}, ${place.country}`;
  crntTemp.textContent = `${place.temp_c} C°`;
  details.textContent = `${place.forecast[0][1]} C°/ ${place.forecast[0][0]} C°`;
  crntIcon.src = `https:${place.icon}`;

  const parsedLocaldate = format(
    parse(place.forecast[0][2], "yyyy-MM-dd", new Date(), { locale: enUS }),
    "PPPP",
  );
  localdate.textContent = parsedLocaldate;

  const dayweek = document.getElementsByClassName("day");
  const frcast = document.getElementsByClassName("frcast-detail");
  const frcastIcon = document.getElementsByClassName("frcast-img");

  // Display forecast for the next 2 days
  for (let i = 0; i < 2; i += 1) {
    // Formats the date into the correct week day
    const parsedDate = parse(
      place.forecast[i + 1][2],
      "yyyy-MM-dd",
      new Date(),
      {
        locale: enUS,
      },
    );

    dayweek[i].textContent = format(parsedDate, "EEEE");
    frcast[i].textContent = `${place.forecast[i + 1][1]} C°/ ${
      place.forecast[i + 1][0]
    } C°`;
    frcastIcon[i].src = `https:${place.forecast[i + 1][3]}`;
  }
}

// Calls the API with the desired place
btn.addEventListener("click", (e) => {
  getInfo(input.value).then((res) => displayWeather(parseInfo(res)));
  e.preventDefault();
});

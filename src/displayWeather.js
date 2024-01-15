/* eslint-disable import/no-extraneous-dependencies */
import { parse, format } from "date-fns";
import { enUS } from "date-fns/locale";

export default function displayWeather(place) {
  const crntInfoDiv = document.getElementById("crnt-info");
  const crntSpans = crntInfoDiv.getElementsByTagName("span");

  const crntIcon = document.getElementById("crnt-img");

  const localDiv = document.getElementById("header");
  const localSpans = localDiv.getElementsByTagName("span");

  const detailsDiv = document.getElementById("current-details");
  const details = detailsDiv.getElementsByTagName("span");

  // Local Display
  localSpans[0].textContent = `${place.name}, ${place.country}`;
  const parsedLocaldate = format(
    parse(place.forecast[0][2], "yyyy-MM-dd", new Date(), { locale: enUS }),
    "PPPP",
  );
  localSpans[1].textContent = parsedLocaldate;

  // Current temperature display
  crntSpans[0].textContent = `${place.temp_c} C°`;
  crntSpans[1].textContent = `Feels like ${place.feelslike_c} C°`;
  crntSpans[2].textContent = `${place.forecast[0][1]} C°/ ${place.forecast[0][0]} C°`;
  crntIcon.src = `https:${place.icon}`;

  details[0].textContent = `Humidity: ${place.humidity}%`;
  details[1].textContent = `UV Index: ${place.uv}`;
  details[2].textContent = `Wind: ${place.wind_kph} Km/h`;
  details[3].textContent = `Preciptation: ${place.precip_mm} mm`;

  // Forecast display
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

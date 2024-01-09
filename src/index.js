function parseInfo(res) {
  const { name } = res.location;
  const { country } = res.location;
  const { temp_c } = res.current;
  const { feelslike_c } = res.current;
  const location = {
    name,
    country,
    temp_c,
    feelslike_c,
  };
  return location;
}

async function getAPI() {
  try {
    const APIObj = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=01d8bb6156124bf8902192720232712&q=London`,
      { mode: "cors" },
    );
    const response = await APIObj.json();
    const info = parseInfo(response);
    console.log(
      `${info.name}, ${info.country} - ${info.temp_c}C° / Feels like ${info.feelslike_c}`,
    );
  } catch (err) {
    console.log(err);
  }
}

getAPI();

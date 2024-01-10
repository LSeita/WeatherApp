/* eslint-disable camelcase */
export default function parseInfo(res) {
  console.log(res);
  const { name } = res.location;
  const { country } = res.location;
  const { temp_c } = res.current;
  const { feelslike_c } = res.current;
  const { icon } = res.current.condition;
  const forecast = [];
  for (let i = 0; i < 3; i += 1) {
    const { date } = res.forecast.forecastday[i];
    const minmax = [
      res.forecast.forecastday[i].day.mintemp_c,
      res.forecast.forecastday[i].day.maxtemp_c,
      date,
      res.forecast.forecastday[i].day.condition.icon,
    ];
    forecast.push(minmax);
  }
  const location = {
    name,
    country,
    temp_c,
    feelslike_c,
    forecast,
    icon,
  };
  return location;
}

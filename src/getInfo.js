/* eslint-disable no-console */
// eslint-disable-next-line consistent-return
export default async function getInfo(local) {
  try {
    const APIobj = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=01d8bb6156124bf8902192720232712&q=${local}&days=3&aqi=no&alerts=no`,
      { mode: "cors" },
    );
    return APIobj.json();
  } catch (err) {
    console.log(err);
  }
}

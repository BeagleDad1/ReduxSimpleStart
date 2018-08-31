import axios from 'axios'
// openweathermap.org api key
// DON'T check in to github I have made it blank
const API_KEY = '948bac555a57bdb6a7e5f2b3f2abfb8d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

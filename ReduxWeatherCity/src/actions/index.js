import axios from 'axios'

const API_KEY = 'eb5b34debcb368a3672640e918a79cf5'

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},co`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
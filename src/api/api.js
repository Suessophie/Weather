const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const key = '58d4adb1fa8d521b3fec939570a8c986';

export const getWeatherForCity = city => fetch(
  `${BASE_URL}weather?q=${city},ua&APPID=${key}`,
)
  .then(response => response.json());

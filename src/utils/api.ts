import * as sampleApiData from '../data/london_weather_sample.json'

/* Exports:
 * - cityData -> Type
 * - mapObject -> interface
 * - cityGeoCodes -> interface
 * - daysOfweek -> Array
 * - cityGeoCodes -> Object
 * - FontAwesomeWeatherIconMap - Object
 *
 * - getWeatherData -> Function
 * - getWeatherIcon -> Function
 * - getRelevantData -> Function
 * - getDateNoTime -> Function
 * - getDayOfWeek -> Function
 * - buildURL -> Function
 * 
* */

export type cityData = {
  city: string,
  lat: number,
  lon: number
}

interface mapObject {
  [index: string]: string;
}

interface cityGeoCodesType {
  [index: string]: {city: string, lat: number, lon: number}
}

const daysOfweek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"]

export const cityGeoCodes: cityGeoCodesType  = {
  toronto: { city: "Toronto", lat:43.7001, lon:-79.4163 },
  london: { city: "London", lat:51.5085, lon:-0.1257  },
  tokyo: { city: "Tokyo", lat:35.6895, lon:139.6917 },
}

export const FontAwesomeWeatherIconMap: mapObject = {
  thunderstorm: "fa-solid fa-cloud-bolt",
  drizzle: "fa-solid fa-cloud-rain",
  rain: "fa-solid fa-cloud-showers-heavy",
  snow: "fa-solid fa-snowflake",
  mist: "fa-solid fa-snowflake",
  smoke: "fa-solid fa-smog",
  haze: "fa-solid fa-smog",
  dust: "fa-solid fa-smog",
  fog: "fa-solid fa-smog",
  sand: "fa-solid fa-wind",
  ash: "fa-solid fa-wind",
  squall: "fa-solid fa-wind",
  tornado: "fa-solid fa-tornado",
  clear: "fa-solid fa-sun",
  clouds: "fa-solid fa-cloud"
}

export const getWeatherData = async (city: string) => {
  const {lat, lon} = cityGeoCodes[city.toLowerCase()]

  try{
    const res = await fetch(buildURL(lat, lon))
    const data = await res.json()
    const weather = getRelevantData(city, data)
    return weather
  }
  catch(err){
    console.error(err)
  }
}

export const getWeatherIcon = (weather: string) => FontAwesomeWeatherIconMap[weather.toLowerCase()]

export const getRelevantData = (city: string, rawData: typeof sampleApiData) => {
  const {daily} = rawData

  return {
    city: city,
    days: daily.map(day => ({
      date: new Date(day.dt * 1000),
      temp: day.temp.day,
      weather: {
	main: day.weather[0].main,
	id: day.weather[0].id,
      }
    }))
  }
}

export const getDateNoTime = (date: Date) => date.setHours(0,0,0,0)
export const getDayOfWeek = (dayNum: number) => daysOfweek[dayNum]

export const buildURL = (lat: number, lon: number) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts,current&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

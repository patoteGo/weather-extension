import { OPEN_WEATHER_API_KEY } from './const';

const API = OPEN_WEATHER_API_KEY
export async function fetchOpenWeatherData(city: string): Promise<any> {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
	if(!res.ok) throw new Error('City not found')
	const data = await res.json()
	return data;
}
import { OPEN_WEATHER_API_KEY } from './const';

const API = OPEN_WEATHER_API_KEY

export interface OpenWeatherData {
	name: string
	main: {
		feels_like: number
		humidity: number
		pressure: number
		temp: number
		temp_max: number
		temp_min: number
	}
	weather: {
		description: string
		icon: string
		id: number
		main: string
	}[]
}

export async function fetchOpenWeatherData(city: string): Promise<OpenWeatherData> {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
	if(!res.ok) throw new Error('City not found')
	const data: OpenWeatherData = await res.json();
	return data;
}
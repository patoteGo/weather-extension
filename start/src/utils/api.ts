import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const OPEN_WEATHER_API_KEY = process.env.API_KEY

export async function fetchOpenWeatherData(city: string): Promise<any> {
	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`)
	if(!res.ok) throw new Error('City not found')
	return await res.json()
}
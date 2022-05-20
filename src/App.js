import WeatherWidget from "./components/WeatherWidget";
import "./styles/App.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherForm from "./components/WeatherForm";

// TEST!!
function App() {

	const [data, setData] = useState({})

	const [location, setLocation] = useState('')

	const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location ? location : "Москва"}&lang=ru&appid=f520b15b2396b58c86aaaeacfca564d7`

	async function searchLocation(e) {
		e.preventDefault()
		try {
			const weatherData = await axios.get(API_URL)
			setData(weatherData.data)
			setLocation("")
		} catch (err) {
			setData(err)
		}
	}

	useEffect(() => {
		async function searchLocation() {
			try {
				const weatherData = await axios.get(API_URL)
				setData(weatherData.data)
				setLocation("")
			} catch (err) {
				setData(err)
			}
		}
		searchLocation()
	}, [])

	const enterLocation = (location) => {
		setLocation(location)
	}

	return (
		<div className="App">
			<div className="container">
				<div className="body">
					<WeatherForm location={location} enter={enterLocation} search={searchLocation} />
					{data.response?.status === 404 ? <p style={{ textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: `translate(${-50}%, ${0}px)` }}>Город не найден</p> : <WeatherWidget data={data} />}
				</div>
			</div>
		</div>
	);
}

export default App;

import WeatherWidget from "./components/WeatherWidget";
import "./styles/App.css"
import axios from 'axios';
import React, { useState } from 'react';
import WeatherForm from "./components/WeatherForm";

function App() {

	const [data, setData] = useState({})

	const [location, setLocation] = useState('')

	const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&lang=ru&appid=f520b15b2396b58c86aaaeacfca564d7`

	async function searchLocation(e) {
		e.preventDefault()
		const weatherData = await axios.get(API_URL)
		setData(weatherData.data)
		setLocation("")
	}

	const enterLocation = (location) => {
		setLocation(location)
	}

	return (
		<div className="App">
			<div className="container">
				<div className="body">
					<WeatherForm location={location} enter={enterLocation} search={searchLocation} />
					<WeatherWidget data={data} />
				</div>
				
			</div>
		</div>
	);
}

export default App;

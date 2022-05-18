import axios from 'axios';
import React, { useState } from 'react';


const WeatherWidget = () => {

	const [data, setData] = useState({})
	const [location, setLocation] = useState('')

	const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&lang=ru&appid=f520b15b2396b58c86aaaeacfca564d7`

	async function searchLocation(e) {
		if (e.key === "Enter") {
			const data = await axios.get(API_URL)
			setData(data.data)
			setLocation("")
		}

	}

	return (
		<>
			<input
				type="text"
				value={location}
				onKeyDown={searchLocation}
				onChange={e => setLocation(e.target.value)}
				placeholder="Введите город"
			/>
			{
				<div className='widget'>
					<div className='widget__top'>
						<div className="widget__location">{data.name}</div>
						<div className="widget__temp">{data.main ? Math.round(data.main.temp) : ''} °C</div>
						<div className="widget__icon">
							{data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : ""}
						</div>
						<div className="widget__description">{data.weather ? data.weather[0].description : ""}</div>
					</div>
					<div className='widget__bottom'>
						<div className="widget__feels">
							<p>Ощущается как</p>
							<p>{data.main ? Math.round(data.main.feels_like) : ""} °C</p>
						</div>
						<div className="widget__humidity">
							<p>Влажность</p>
							<p>{data.main ? data.main.humidity : ""}%</p>
						</div>
						<div className="windget__wind">
							<p>Ветер</p>
							<p>{data.wind ? data.wind.speed : ""}м/c</p>
						</div>
					</div>
					
				</div>}

		</>

	);
};

export default WeatherWidget;
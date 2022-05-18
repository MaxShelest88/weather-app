import React from 'react';

const WeatherWidget = ({ data }) => {
	return (
		<div className='widget'>
			<div className='widget__top'>
				<div className="widget__location">{data.name}</div>
				<div className="widget__temp">{data.main ? Math.round(data.main.temp) : ''}°C</div>
				<div className="widget__icon">
					{data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" /> : ""}
				</div>
				<div className="widget__description">{data.weather ? data.weather[0].description : ""}</div>
			</div>
			<div className='widget__bottom'>
				<div className="widget__feels">
					<p>Ощущается как</p>
					<p>{data.main ? Math.round(data.main.feels_like) : ""}°C</p>
				</div>
				<div className="widget__humidity">
					<p>Влажность</p>
					<p>{data.main ? data.main.humidity : ""}%</p>
				</div>
				<div className="windget__wind">
					<p>Ветер</p>
					<p>{data.wind ? data.wind.speed : ""} м/c</p>
				</div>
			</div>

		</div>

	);
};

export default WeatherWidget;
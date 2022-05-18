import React from 'react';
import WeatherButton from './UI/button/WeatherButton';
import WeatherInput from './UI/input/WeatherInput';

const WeatherForm = ({ location, search, enter }) => {
	
	return (
		<form style={{textAlign:"center"}}>
			<WeatherInput
				type="text"
				value={location}
				onChange={e => enter(e.target.value)}
				placeholder="Введите город"
			/>
			<WeatherButton
				onClick={(e)=>search(e)}
			>
				Найти
			</WeatherButton>
		</form>
	);
};

export default WeatherForm;
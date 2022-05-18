import React from 'react';
import classes from './WeatherInput.module.css'

const WeatherInput = (props) => {
	return (
			<input className={classes.wInp} {...props}/>
	);
};

export default WeatherInput;
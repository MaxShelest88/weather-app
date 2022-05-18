import React from 'react';
import classes from './WeatherButton.module.css'

const WeatherButton = (props) => {
	return (
		<button className={classes.wBtn} {...props}>{props.children}</button>
	);
};

export default WeatherButton;
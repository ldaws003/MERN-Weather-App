import React from 'react';
import '../App.css';

function DisplayWeather(props){
	//input a way to get icons for weather
	const icon = "http://openweathermap.org/img/wn/" + props.weather.weather[0].icon + ".png";
	return(
		<div className="weather-card">
			<p>{props.city.name}, {props.city.country}</p>
			<img className="weather-icon" src={icon} alt={props.weather.weather[0].description}/>
			<p>time: {props.weather.dt_txt}</p>
			<p>temperature: {props.weather.main.temp}&#8457;</p>
			<p>feels like: {props.weather.main.feels_like}&#8457;</p>
			<p>max temperature: {props.weather.main.temp_max}&#8457;</p>
			<p>min temperature: {props.weather.main.temp_min}&#8457;</p>
			<p>pressure: {props.weather.main.pressure}hPa</p>
			<p>humidity: {props.weather.main.humidity}&#37;</p>
			<p>description: {props.weather.weather[0].description}</p>
		</div>
	);
}

export default DisplayWeather;
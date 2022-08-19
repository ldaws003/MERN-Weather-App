import React from 'react';
import DisplayWeather from './DisplayWeather';
import axios from 'axios';

class WeatherLocal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			locale: {},
			displayAskLocale: true,
			apiBackend: "http://localhost:5000/search-weather",
			cursor: 0
		};
		this.fetchWeather = this.fetchWeather.bind(this);
		this.getLocale = this.getLocale.bind(this);
		this.rejectLocale = this.rejectLocale.bind(this);
		this.successfulLocation = this.successfulLocation.bind(this);
		this.failedLocation = this.failedLocation.bind(this);
		this.nextWeather = this.nextWeather.bind(this);
		this.prevWeather = this.prevWeather.bind(this);
	}
	
	nextWeather(){
		if(this.state.locale.data.list.length - 1 > this.state.cursor)
			this.setState((prevState, props) => {
						var newCursor = prevState.cursor + 1;
						return {cursor: newCursor};
			});
	}
	
	prevWeather(){
		if(this.state.cursor > 0)
			this.setState((prevState, props) => {
					var newCursor = prevState.cursor - 1;
					return {cursor: newCursor};
			});
	}
	
	fetchWeather(lat, long){
		axios.get(this.state.apiBackend, {
			params: {
				lat,
				lon: long
			}
		})
		.then((obj) => {
			this.setState({
				displayAskLocale: false,
				locale: {...obj}
			});
		})
		.catch((err) => {
			let error = {...err.response.data};
			this.props.setErrorMsg(error.msg);
		});
	}
	
	successfulLocation(position){
		const {latitude, longitude} = position.coords;
		this.fetchWeather(latitude, longitude);
	}
	
	failedLocation(){
		this.props.setErrorMsg('Sorry but there was an error. Please reload the app to try again.');
	}
	
	getLocale(){
		this.setState((prevState, props) => {
			if(window.navigator.geolocation){
				window.navigator.geolocation.getCurrentPosition(this.successfulLocation , this.failedLocation);
			}
			else {
				// send an error message saying that there was 
				this.props.setErrorMsg("Sorry but your browser doesn't support geolocation API, please use another browser.");
			}
		});
	}
	
	rejectLocale(){
		this.setState({
			displayAskLocale: false
		});
	}
	
	
	
	render(){
		/*
		let searchResults = [];
		
		if(Object.keys(this.state.locale).length > 0)
		{
			searchResults = this.state.locale.data.list.map((ele, i) => {
				return <li key={ele.dt_txt}><DisplayWeather weather={ele}/></li>
			});
		}
		*/
		
		return(
			<div className="vertical-containter">
			
				{/*asking for location*/}	
				{this.state.displayAskLocale && 
				
					<div className="coord-ask">
						<p>Hello, please give us access to your location to show the weather for where you are</p>
						<button onClick={this.getLocale} className="yes-btn">Yes</button>
						<button onClick={this.rejectLocale} className="no-btn">No</button>
					</div>
				}
				
				{/*display local weather*/}
				{Object.keys(this.state.locale).length > 0 &&
					<div className="result-container">
						<button className="prevWeather-btn cursor-btn" onClick={this.prevWeather} ><img src="../arrow-left-64.png" /></button>
						<DisplayWeather weather={this.state.locale.data.list[this.state.cursor]} city={this.state.locale.data.city} />
						<button className="nextWeather-btn cursor-btn" onClick={this.nextWeather} ><img src="../arrow-right-64.png" /></button>
					</div>
				}
			
			</div>
		);
	};
}

export default WeatherLocal;
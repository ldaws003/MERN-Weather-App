import React from 'react';
import './DisplayWeather';
import axios from 'axios';

class Search extends React.Component
{
	constructor(props){
		super(props);
		this.state = {
			weather: [],
			currentCity: '',
			input: ''
		};
		this.searchCities = this.searchCities.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.hanldeChange = this.handleChange.bind(this);
	}
	
	handleSubmit(event){
		event.preventDefault();
		axios.get('/api-backend', {
			params: {
				search: this.state.input
			}
		})
		.then((res) => {
			this.setState({
				weather: res.weather,
				currentCity: res.name
			});
		})
		.catch((err) => {
			this.props.setErrorMsg(err.msg);
		});
	}
	
	handleChange(event){
		this.setState({
			input: event.target.value
		});
	}
	
	searchCities(){
		
	}
	
	render(){
		let searchResults;
		if(this.state.cities.length > 0)
		{
			searchResults = this.state.cities.map((ele, i) => {
				return <li key={ele.name +  i}></li>
			});
		}
		
		return(
			<div>
				<div>
					<h3>Please type in the city to see the weather there.</h3>
					<form>
						<input onChange={this.handleChange}/>
						<submiit onSubmit={this.handleSubmit}/>
					</form>
				</div>
				
				{this.state.weather.length &&
					<ul>
						{searchResults}
					</ul>
					
				}				
			</div>
		);
	}
}

export default Search;
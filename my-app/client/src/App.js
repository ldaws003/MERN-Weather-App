import logo from './logo.svg';
import React from 'react';
import './css/App.css';
import WeatherLocal from './components/WeatherLocal';
import Search from './components/Search';
import ErrorMsg from './components/ErrorMsg';


class App extends React.Component 
{
	constructor(props){
		super(props);
		this.state = {
			error: ''
		}; 
		this.clearErrorMsg	= this.clearErrorMsg.bind(this);
		this.setErrorMsg = this.setErrorMsg.bind(this);
	}
	
	clearErrorMsg(){
		this.setState({
			error: ''
		});
	};
	
	setErrorMsg(msg){
		this.setState({
			error: msg
		});
	};

	
	render(){
		return (
			<div className="App">
			  <WeatherLocal setErrorMsg={this.setErrorMsg}/>
			  {/*<Search setErrorMsg={this.setErrorMsg}/>*/}
			  {this.state.error !== '' ? <ErrorMsg msg={this.state.error}/> : null}
			</div>
		);
	}
  
}

export default App;

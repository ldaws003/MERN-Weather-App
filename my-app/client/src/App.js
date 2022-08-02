import logo from './logo.svg';
import './App.css';
import 'WeatherLocal'
import 'Search'
import 'ErrorMsg'

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
		this.setState(
			error: ''
		);
	};
	
	setErrorMsg(msg){
		this.setState(
			error: msg
		);
	};

	
	render(){
		return (
			<div className="App">
			  <WeatherLocal/>
			  <Search/>
			  {this.state.error != '' ? <ErrorMsg msg={this.state.error}/> : null}
			</div>
		);
	}
  
}

export default App;

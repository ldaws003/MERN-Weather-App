import { Component }, React from 'react';
import axios from 'axios';


class LocalWeather extends Component {
   constructor(props){
      super(props);
      this.state = {
         weatherData: null
      };
   }
   
   componentWillMount(){
      if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition( (position) => {
            axios({
               method: "get",
               url: "/get_local_weather/",
               params: {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude
               }
            })
            .then((data) => {
               this.setState({weatherData: data});
            })
            .catch((err) => {
               console.log(err)
            });
         });
      }
   }
   
   render(){
      
      return(
         <div>
            
         </div>      
      );
   }
}


export default 
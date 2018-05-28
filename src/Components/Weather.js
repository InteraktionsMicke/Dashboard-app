import React, { Component } from 'react';

class Weather extends Component {

  state = {
    weatherTemp: [],
    weatherDescription: [],
  }

    componentDidMount(){
       this.getWeather(); 
    }

    getWeather = () => {
       
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&APPID=51b884d5b0dc0b81d071d85c1da96b67&lang=se')
        .then(function (response) {
            return response.json();
        })
        .then((weatherData) => {
        this.setState ({ weatherTemp: weatherData.main });
        this.setState ({weatherDescription: weatherData.weather[0]})
        console.log(weatherData)
        })
        .catch(function (error) {
            console.log(error)
        })
}
 
    render() {
        return (
        <div class="col-xs-3 box">
            <div class="col-xs-12 inside-box">
                <h2>VÄDER</h2>
                <h2> {Math.round(this.state.weatherTemp.temp)} </h2>
                <h2> {this.state.weatherDescription.description} </h2>
            </div>
        </div>
            

        )

    }

    
}



export default Weather;
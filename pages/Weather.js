import React, { useState } from 'react';
import Temperature from './Temperature.js';

// Weather takes in an initial temperature as a prop
const Weather = ({temp}) => {

    // Weather variables for weatherIndex and temperature in Celsius
    const [weatherIndex, setWeather] = useState(0);

    // Array of weathers to cycle through on click by modifying weatherIndex
    const weathers = ["Sunny", "Rainy", "Stormy", "Cloudy"];

    return (
        <div>
            {/* Button cycles through weather array */}
            <button class="cycle" onClick={() => setWeather((weatherIndex + 1) % weathers.length)}>Cycle Weather</button>
            <p>{weathers[weatherIndex]}</p>
            <br></br>
            {/* Temperature prop is passed to temperature component */}
            <Temperature celsius={temp}/>
        </div>
    );
}

export default Weather;
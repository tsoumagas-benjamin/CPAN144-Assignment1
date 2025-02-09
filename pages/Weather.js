import React, { useState } from 'react';
import Temperature from './Temperature.js';

// Take in temp as a prop to later pass to the Temperature component
const Weather = ({temp}) => {

    // Handle the state of weatherIndex
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
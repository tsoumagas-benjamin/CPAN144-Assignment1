import React, { useState } from 'react';

// Weather takes in an initial temperature as a prop
const Temperature = ({celsius}) => {

    // Temperature Variables
    const [temperature, setTemp] = useState(celsius);

    return (
        <div>
            {/* Buttons to update temperature in Celsius */}
            <button class="increment" onClick={() => setTemp(temperature + 1)}>Increment</button>
            <button class="decrement" onClick={() => setTemp(temperature - 1)}>Decrement</button>
            <p>{temperature}°C</p>
            <br></br>
            {/* Celsius is converted to Fahrenheit for Americans in real time */}
            <h3>Celsius to Fahrenheit</h3>
            <p>{(1.8 * temperature + 32).toFixed(1)}°F</p>
            <br></br>
        </div>
    );
}

export default Temperature;
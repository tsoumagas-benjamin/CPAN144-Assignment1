import React from 'react';
import Weather from "./Weather.js";
import Link from 'next/link';

// Weather page with weather and temperature widget
const WeatherPage = () => {

    return (
        <div>
            <Weather temp={18}/>
            <ul>
                <li><Link href="/"><button class="home">Home</button></Link></li>
            </ul>
        </div>
    );
}

export default WeatherPage;
import React from 'react';
import Registration from "./Registration.js";
import Link from 'next/link';

// Weather page with weather and temperature widget
const RegistrationPage = () => {

    // RegistrationPage with Registration component that passes Admin as prop to Registration
    // Links back to home page with a button style
    return (
        <div>
            <Registration user={"Admin"} />
            <ul>
                <li><Link href="/"><button class="home">Home</button></Link></li>
            </ul>
        </div>
    );
}

export default RegistrationPage;
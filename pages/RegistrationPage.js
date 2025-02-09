import React from 'react';
import Registration from "./Registration.js";
import Link from 'next/link';

// Weather page with weather and temperature widget
const RegistrationPage = () => {

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
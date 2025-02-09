import Weather from "./Weather.js";
import Registration from "./Registration.js";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <ul>
        <li><Link href="/WeatherPage"><button class="weather-page">Weather</button></Link></li>
        <li><Link href="/RegistrationPage"><button class="registration-page">Registration</button></Link></li>
      </ul>
    </>
  );
}

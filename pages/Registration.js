import React, { useState } from 'react';

// Take in user as a prop
const Registration = ({user}) => {

    // Handle the state of name
    const [name, setName] = useState('');

    // Prevent default submit behaviour; instead either set new name or alert users if name is improper
    const handleSubmit = (event) => {
        event.preventDefault();
        let username = document.getElementById('name').value;
        if (username) {
            setName(username);
        } else {
            alert("Please enter a username!");
        }
    }

    return (
        <div>
            <h1>Registration Form</h1>
            {/* Form for users to enter their name and display what name has been successfully set */}
            <form onSubmit={handleSubmit}> 
                <input type="text" id="name" defaultValue={user}></input>
                {name && <p class="user-submit">{name} submitted successfully!</p>}
                <br></br>
                <button class="submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
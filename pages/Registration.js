import React, { useState } from 'react';

const Registration = ({user}) => {

    // Form Submission
    const [name, setName] = useState('');
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
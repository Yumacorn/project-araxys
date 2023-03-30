import React, { useState } from 'react';
import { Profile } from './profile-info';
import { UserDisplay } from './user';

export const Login = (): JSX.Element => {
    let [name, setName] = useState('');
    let [level, setLevel] = useState(0);
    let [username, setUsername] = useState('');

    let [loggedIn, setLoggedIn] = useState(false);

    const logout = () => {
        console.log("logout");
        setLoggedIn(false);
        setUsername("");
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (event.target[0].value !== null) {
            console.log(event);
            setName(event.target[0].value);
            setLevel(event.target[1].value);
            setUsername(event.target[2].value);
            setLoggedIn(true);
        } else {
            console.log(event.target[0].value);
            setLoggedIn(false);
        }        
    };

    return (
        <div>
            <h1>Project Araxys</h1>
            { loggedIn ?
                (<div >
                    <Profile name={name} level={level} username={username} logoutUser={logout}/>
                    <UserDisplay />
                </div>) : 
                (<div>
                    <h2>Register</h2>
                    <form className="intakeForm" method="post" onSubmit={handleSubmit}>
                        <div>Enter your information here: <br/>
                            <label htmlFor="nameEntry">Name: <input name="nameEntry" placeholder="Enter your name"></input></label><br/>
                            <label htmlFor="levelEntry">Level: <input name="levelEntry" placeholder="Enter your level"></input></label><br/>
                            <label htmlFor="usernameEntry">Username: <input name="usernameEntry" placeholder="Enter a username"></input></label><br/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>)
            }
        </div>
    );
};
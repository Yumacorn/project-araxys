import React, { useState } from 'react';

export const Profile = (props:  {name: string; level: number; username:string; logoutUser:any } ) => {
    const [profile, setProfile] = useState<{name: string; level: number, username?: string}>
        (
            {
                name: props.name,
                level: props.level,
                username: props.username,
            }
        );


        return (
            <div className="profile" >
                <p>Logged in as <span className="username">{profile.username}</span></p>
                <button className="logout" onClick={props.logoutUser}>Not you? Click to logout</button>
                <table>
                    <thead>
                        <th className="profileTitle">Profile</th>
                    </thead>
                    <tbody>
                        <tr>
                            <th><span className="profileHeader">Name: </span></th>
                            <th className="profileContent">{profile.name}</th>
                        </tr>
                        <tr>
                            <th><span className="profileHeader">Level: </span></th>
                            <th className="profileContent">{profile.level}</th>
                        </tr>
                        <tr>
                            <th><span className="profileHeader">Username: </span></th>
                            <th className="profileContent">{profile.username}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
};
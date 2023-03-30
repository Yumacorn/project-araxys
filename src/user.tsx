// import React from 'react';
type AppProps = {
    username: string;
} & typeof defaultProps;

const defaultProps = {
    username: 'New Agent',
};

export const UserDisplay = ({ username }: AppProps): JSX.Element => {
    return(
        <div>
            <h2>Welcome to Project Araxys!</h2>
            <p>Hello {username}</p>
            <p>This is a cool UI dashboard that lets you custom choose some aesthetics from the 5v5 tactical first person shooter Valorant.</p>
            <h4>New to Valorant?</h4>
            <p>Follow <a href="https://playvalorant.com/en-us/">this link</a> to learn more from the Riot Game developers who made it!</p>
        </div>
    );
}

UserDisplay.defaultProps = defaultProps;
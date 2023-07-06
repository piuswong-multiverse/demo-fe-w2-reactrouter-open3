import React from 'react';
import { Link } from 'react-router-dom';

function About () {
    return (
        <div className="text-secondary">
            <h1>Hello from About!</h1>
            <h2>I'm in a special component!</h2>
            <div>
                <Link to='/'>Click me to go back home</Link>
            </div>
        </div>
    )
}

export { About };
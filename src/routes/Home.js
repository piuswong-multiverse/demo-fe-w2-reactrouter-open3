import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="text-primary">
            <h1>Hello from Home!</h1>
            {/* <div>
                <a href="/about">Click me (old way) to go to About</a>
            </div> */}
            <div>
                <Link to='/about'>Click me (Router Router way) to go to About</Link>
            </div>
        </div>
    )
}

export { Home };
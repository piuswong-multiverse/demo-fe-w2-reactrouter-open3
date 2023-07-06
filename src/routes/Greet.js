import React from 'react';
import { useParams } from 'react-router-dom';

function Greet() {
    const params = useParams();

    return(
        <div className="text-success">
            <h1>We are in the Greet component!</h1>
            <h2>Hi, { params.name }! You're great?</h2>
        </div>
    )
}

export { Greet };
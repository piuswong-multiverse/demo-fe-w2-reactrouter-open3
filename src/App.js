import React from 'react';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { Greet } from './routes/Greet';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const piussRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'greet/:name',
        element: <Greet />
    }
])

function App() {
    return(
        <div>
            <RouterProvider router={piussRouter} />
        </div>
    )
}

export { App };
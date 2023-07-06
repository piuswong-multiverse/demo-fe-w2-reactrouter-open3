import React from 'react';
import { Home } from './routes/Home';
import { About } from './routes/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const piussRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'about',
        element: <About />
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
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'


import React from 'react';
import ReactDOM from 'react-dom/client';

const areactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Click to visit Google'
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
import React from 'react';
import ReactDOM from 'react-dom/client';

const header = React.createElement('h2', {
    'className': 'header'
}, 'Hello World');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(header);
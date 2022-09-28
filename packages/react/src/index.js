import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ReactButton from './button.js';

const App = () => {
    const [value, setValue] = useState(0);

    const add = () => {
        setValue((v) => v + 1);
    };

    return (
        <div>
            <ReactButton onClick={add}>react button</ReactButton>
            <div>{value}</div>
        </div>
    );
};

const createApp = () => {

    const rootElement = document.createElement('div');
    rootElement.className = 'react-app';
    document.body.appendChild(rootElement);

    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <App></App>
    );

};

export { createApp };

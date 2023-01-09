import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import './style/main.scss';

const container = document.querySelector('.jsx-container');
const root = ReactDOM.createRoot(container);

root.render(<App />);

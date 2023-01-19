import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'

import App from './App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

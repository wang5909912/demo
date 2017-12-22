import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './templates/homepage/homepage';
import registerServiceWorker from './registerServiceWorker';
import './controlsize'
ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();

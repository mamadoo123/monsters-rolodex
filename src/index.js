import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* =============================
    mohamed khamis instructions:
=================================
    i have solved create-react-app issue by uninstalling
    react-scripts version 3.0.1 devDependency and then 
    reinstall it using an older version 2.2.5
    using yarn commands           
    </p> */
serviceWorker.register();

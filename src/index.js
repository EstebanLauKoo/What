import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// using ES6 modules
import { BrowserRouter, Route, Link } from 'react-router-dom'


const Root = () => {
    return(
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


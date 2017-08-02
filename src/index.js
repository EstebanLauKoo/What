// Lets start this

// Importing react react to use its methods
// Specifically comes from package.json dependencies
import React from 'react';

import { render } from 'react-dom';

import { BrowserRouter, Match, Miss} from 'react-router';

import './index.css';
import Login from './Components/Login';
import User from './User'
import notFound from './notFound'



const Root = () => {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Login} />
                <Match pattern="/:uid"  component={User} />
                <Miss component={notFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('root'));


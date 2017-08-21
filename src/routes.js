import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>
);

export default Routes;

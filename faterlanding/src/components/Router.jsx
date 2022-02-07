import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
export default class RouterPage extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' component={Home} exact />
                </Switch>
            </Router>

        )
            ;
    }
}

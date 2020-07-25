import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import App from "../Components/App";
import Login from "../Components/Login";
import List from "../Components/List";
import Add from "../Components/Add";
import Single from "../Components/Single";
import requireAuth from "../Components/requireAuth";


class Routes extends Component {


    render() {
        return (
            <div className="main-wrapper">
                <div className="flex-in">
                    <Route path="/" component={requireAuth(App)} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/list" component={requireAuth(List)} />
                    <Route exact path="/list/:id" component={requireAuth(Single)} />
                    <Route exact path="/add" component={requireAuth(Add)} />
                </div>
            </div>
        );
    }
}

export default Routes;
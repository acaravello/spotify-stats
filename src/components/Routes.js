import React, {Component} from "react";
import "./Routes.css";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";

class Routes extends Component {
    render() {
        return(
            <Switch>
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/artists" render={() => <Artists />} />
            <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Routes;
import React, {Component} from "react";
import "./Routes.css";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";

class Routes extends Component {

    constructor(props) {
        super(props);
        console.log("Routes props");
        console.log(props)
    }
    render() {

        const {userInfo} = this.props;
        return(
            <Switch>
            <Route exact path="/home" render={() => <Home userInfo={userInfo}/>} />
            <Route exact path="/artists" render={() => <Artists />} />
            <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Routes;
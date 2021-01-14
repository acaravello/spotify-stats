import React, {Component} from "react";
import "./Routes.css";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./Home";
import Artists from "./Artists";
import Tracks from "./Tracks";
import Playlists from "./Playlists";
import Activities from "./Activities";

class Routes extends Component {

    constructor(props) {
        super(props);
        console.log("Routes props");
        console.log(props)
    }
    render() {

        const {userInfo, topArtists, topTracks, playlists} = this.props;

        return(
            <Switch>
            <Route exact path="/home" render={(routeProps) => <Home 
            userInfo={userInfo} topArtists={topArtists} topTracks={topTracks} {...routeProps}/>} 
            />
            <Route exact path="/artists" render={() => <Artists artistsAllTimes={topArtists}/> } />
            <Route exact path="/tracks" render={() => <Tracks tracksAllTimes={topTracks}/> } />
            <Route exact path="/playlists" render={() => <Playlists userPlaylists={playlists} /> } />
            <Route exact path="/activities" render={() => <Activities /> } />
            <Redirect to="/home" />
            </Switch>
        )
    }
}

export default Routes;
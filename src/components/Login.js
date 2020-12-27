import React, {Component} from "react";
import {accessUrl} from "../utils/spotify";
import "./Login.css";


class Login extends Component {

    loggingToSpotify() {
        window.location =accessUrl;
    }

    render() {
        return(
            <div className="Login">
                <h1>
                    Spotify Stats
                </h1>
                <button className="LoginButton" onClick={this.loggingToSpotify}>Log in to Spotify</button>
                
            </div>
        )
    }
}

export default Login;
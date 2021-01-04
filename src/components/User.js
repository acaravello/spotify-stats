import React, {Component} from "react";
import "./User.css";
import Navbar from "./Navbar";
import Routes from "./Routes";
import {getHashParams, getUserInfo} from "../utils/spotify";


class User extends Component {
    constructor(props) {
        super(props);
        
        const params = getHashParams();
        console.log("PArams are");
        console.log(params)

        if(params.access_token) {

            getUserInfo();
            window.location.hash = "";
        }
    }

    render() {
        return(
            <div>
                <Navbar />
                <Routes />
            </div>
            
        )
    }
}

export default User;


import React, {Component} from "react";
import "./Home.css";
import Navbar from "./Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="Home">Home Spotify Stats</div>
            </div>
            
        )
    }
}

export default Home;


import React, {Component} from "react";
import "./Home.css";
import Spotify from "spotify-web-api-js";

const spotifyWebApi = new Spotify();
class Home extends Component {
    constructor(props) {
        super(props);
        
        const params = this.getHashParams();
        console.log("PArams are");
        console.log(params)

        this.getHashParams = this.getHashParams.bind(this);
        this.getUserInfo = this.getUserInfo.bind(this);

        if(params.access_token) {
            spotifyWebApi.setAccessToken(params.access_token);
            this.getUserInfo();
        }
    }

    getHashParams = () => {
        const hashParams = {};
        let e;
        const r = /([^&;=]+)=?([^&;]*)/g;
        const q = window.location.hash.substring(1);
        while ((e = r.exec(q))) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      };

      getUserInfo() {
          spotifyWebApi.getMe().then(response => {
              console.log("Me is");
              console.log(response)
          }).catch( error => {
              console.log("error in retrieving data");
              console.log(error);
          })
      }

    render() {
        return(
            <div className="Home">Home Spotify Stats</div>
        )
    }
}

export default Home;


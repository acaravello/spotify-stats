import React, {Component} from "react";
import "./User.css";
import Navbar from "./Navbar";
import Routes from "./Routes";
import { getUserInfo, getUserPlaylists, getUserArtists, getTopArtistsAllTimes, getTopTracksAllTimes } from "../utils/spotify";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            playlists: 0,
            artists: 0,
            topTracks: {},
            topArtists: {}
        }
    }

    componentDidMount() {
        this.getInfo();
    }

    async getInfo() {
        
        const [data, playlists, artists, topArtists, topTracks] =  await Promise.all([
                getUserInfo(), 
                getUserPlaylists(), 
                getUserArtists(), 
                getTopArtistsAllTimes(), 
                getTopTracksAllTimes()
            ]);
            
        console.log("TOp tracks");
        console.log(topTracks)

        let dataRetrieved = data.data;
        this.setState({
            userInfo: {
                ...dataRetrieved, 
                playlists: playlists.data.total, 
                artists: artists.data.artists.total,
            },
            topTracks: topTracks.data,
            topArtists: topArtists.data
        });
    }


    render() {

        const {userInfo, topArtists, topTracks} = this.state;

        return(
            <div className="User">
                <Navbar />
                <Routes userInfo={userInfo} topArtists={topArtists} topTracks={topTracks}/>
            </div>
            
        )
    }
}

export default User;


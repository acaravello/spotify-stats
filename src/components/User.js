import React, {Component} from "react";
import "./User.css";
import Navbar from "./Navbar";
import Routes from "./Routes";
import { getUserInfo, getUserPlaylists, getUserArtists } from "../utils/spotify";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            playlists: 0,
            artists: 0
        }
    }

    componentDidMount() {
        this.getInfo();
    }

    async getInfo() {
        const data = await getUserInfo();
        const playlists = await getUserPlaylists();
        const artists = await getUserArtists();
        let dataRetrieved = data.data;
        this.setState({
            userInfo: {
                ...dataRetrieved, 
                playlists: playlists.data.total, 
                artists: artists.data.artists.total
            }
        });
    }


    render() {

        const {userInfo} = this.state;

        return(
            <div className="User">
                <Navbar />
                <Routes userInfo={userInfo}/>
            </div>
            
        )
    }
}

export default User;


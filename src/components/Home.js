import React, {Component} from "react";
import "./Home.css";
import Navbar from "./Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        const {userInfo} = this.props;

        console.log("User Info are");
        console.log(userInfo)

        return(
            <div>
                <Navbar />
                <div className="Home">
                    <div className="Home-Header">

                            {userInfo.external_urls &&
                            <a target="_blank" href={userInfo.external_urls.spotify}>
                            <div className="Img-Container" >
                            {userInfo.images &&  <img src={userInfo.images[0].url} alt="profile_image" className="Profile-Image"/> }
                            </div>
                            </a>
                            }
                       
                        <div className="Name-Container">
                            {userInfo.product && 
                                <div className="User-Type">{userInfo.product} user</div>
                            }

                            <div className="Name">
                                {userInfo.display_name}
                            </div>

                            <div className="User-Info">
                                <div className="Info">
                                    {userInfo.followers &&
                                        <div className="Info-El">
                                            <div className="info-title">Followers</div>
                                            <div className="info-value">{userInfo.followers.total}</div>
                                        </div>
                                    }
                                </div>
                                <div className="Info">
                                    {userInfo.artists &&
                                        <div className="Info-El">
                                            <div className="info-title">Following</div>
                                            <div className="info-value">{userInfo.artists}</div>
                                        </div>
                                    }
                                </div>

                                <div className="Info">
                                    {userInfo.playlists &&
                                        <div className="Info-El">
                                            <div className="info-title">Playlists</div>
                                            <div className="info-value">{userInfo.playlists}</div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;


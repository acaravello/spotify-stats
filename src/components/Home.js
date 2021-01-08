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
                            <div className="Title">
                                profile
                            </div>
                            <div className="Name">
                                {userInfo.display_name}
                            </div>
                            </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home;


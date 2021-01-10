import React, {Component} from "react";
import "./Home.css";
import Navbar from "./Navbar";

class Home extends Component {

    toTopArtists() {
        this.props.history.push(`/artists`);
    }

    toTopTracks() {
        this.props.history.push(`/tracks`);
    }

    render() {

        const {userInfo, topArtists, topTracks} = this.props;

        return(
            <div>
                <Navbar />
                <div className="Home">
                    <div className="Home-Header">

                            {userInfo.external_urls &&
                            <a target="_blank" rel="noreferrer" href={userInfo.external_urls.spotify}>
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

                    <div className="Home-Body">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="col-11">
                                        <div className="Body-Section">
                                            <div className="Header">
                                                <div className="Body-Title">Top Artists</div>
                                                <button className="MoreButton" onClick={() => this.toTopArtists()}>More</button>
                                            </div>
                                            <div className="Body-List">
                                                {topArtists && topArtists.items && topArtists.items.map((artist, index) => {
                                                    return (
                                                        <div className="Artist-Element" key={index}>
                                                            <a className="Artist-Link" href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                                            <div className="Artist-Image">
                                                                <img src={artist.images[0].url}  alt={artist.name}/>
                                                                </div>
                                                            <div className="Artist-Name">{artist.name}</div>
                                                            </a>
                                                        </div>
                                                        
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="col-11">
                                        <div className="Body-Section">
                                            <div className="Header">
                                                <div className="Body-Title">Top Tracks</div>
                                                <button className="MoreButton" onClick={() => this.toTopTracks()} >More</button>
                                            </div>
                                            <div className="Body-List">
                                            {topTracks && topTracks.items && topTracks.items.map((track, index) => {
                                                    return (
                                                        <div className="Track-Element" key={index}>
                                                            <a className="Track-Link" href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                                                                <div className="Album-Image">
                                                                    <img src={track.album.images[0].url} alt={track.artists[0].name} />
                                                                </div>
                                                                <div className="Track-Info">
                                                                    <div className="Track-Name">{track.name}</div>
                                                                    <div className="Track-SecondaryInfo">
                                                                        {track.artists[0].name} <div className="Separator">·</div> {track.album.name}
                                                                    </div>
                                                                </div>

                                                            </a>
                                                        </div>
                                                        
                                                    )
                                                })}
                                            </div>

                                        </div>
                                    </div>
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


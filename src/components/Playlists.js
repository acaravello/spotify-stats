import React, {Component} from "react";
import "./Playlists.css";

class Playlists extends Component {

    render() {

        const {userPlaylists} = this.props;

        return(
            <div className="Playlists">
                <div className="Playlists-Header">
                    <div className="Playlists-Title">
                        Saved Playlists
                    </div>
                </div>

                <div className="Playlists-Body">
                    {userPlaylists && userPlaylists.items && userPlaylists.items.map((playlist, index) => {
                        return (
                            
                            <div className="Playlists-Element" key={index}>
                                <a className="Playlists-Link" href={playlist.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <div className="Playlists-Image">
                                        <img src={playlist.images[0].url} alt={playlist.name} />
                                    </div>
                                    <div className="Playlists-Name">{playlist.name}</div>
                                    <div className="Playlists-Tracks">{playlist.tracks.total} tracks</div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Playlists;
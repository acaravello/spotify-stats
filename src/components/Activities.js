import React, { Component } from "react";
import "./Activities.css";

class Activities extends Component {

    constructor(props) {
        super(props);
        this.getTrackLength = this.getTrackLength.bind(this);
    }

    getTrackLength(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    render() {

        const {recentTracks} = this.props;

        return (
                <div className="Activities">

                    <div className="Activities-Header">
                        <div className="Activities-Title">
                            Recent Played Songs
                        </div>

                    </div>

                    <div className="Activities-Body">
                        {recentTracks && recentTracks.items && recentTracks.items.map((activity, index) => {
                            return (
                                <div className="Activities-Container" key={index}>
                                    <div className="Activities-Element" >
                                        <a className="Activities-Link" href={activity.track.external_urls.spotify} target="_blank" rel="noreferrer">
                                            <div className="Activities-Image">
                                                <img src={activity.track.album.images[0].url} alt={activity.track.artists[0].name} />
                                            </div>
                                            <div className="Track-Info">
                                                <div className="Track-Name">{activity.track.name}</div>
                                                <div className="Track-SecondaryInfo">
                                                    {activity.track.artists[0].name} <div className="Separator">·</div> {activity.track.album.name}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="Activities-Length">{this.getTrackLength(activity.track.duration_ms)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
        )
    }
}

export default Activities;
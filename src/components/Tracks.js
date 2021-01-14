import React, {Component} from "react";
import "./Tracks.css";
import {getTopTracks6Months, getTopTracks4Weeks} from "../utils/spotify";

class Tracks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks6Months: {},
            tracks4Weeks: {},
            selected : "long"
        }

        this.getTracksInfo = this.getTracksInfo.bind(this);
        this.getTrackLength = this.getTrackLength.bind(this);
 
    }

    componentDidMount() {
        this.getTracksInfo(); 
    }


    async getTracksInfo() {
        const [dataMedium, dataShort] = await Promise.all([
            getTopTracks6Months(),
            getTopTracks4Weeks()
        ]);

        this.setState ({
            tracks6Months: dataMedium.data,
            tracks4Weeks: dataShort.data
        })

    }

    getTrackLength(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    render() {

        const {tracks6Months, tracks4Weeks, selected} = this.state;
        const {tracksAllTimes} = this.props;

        return(
            <div className="Tracks">

                <div className="Tracks-Header">
                    <div className="Tracks-Title">
                        Top Tracks
                </div>
                    <div className="Tracks-RangeSelector">
                        <button className={`RangeSelector-Button ` + (selected === "long" ? "active" : null)} 
                        onClick={() => this.setState({selected: "long"})}> All Times </button>
                        <button className={`RangeSelector-Button ` + (selected === "medium" ? "active" : null)} 
                        onClick={() => {this.setState({selected: "medium"})}}> Last Few Months </button>
                        <button className={`RangeSelector-Button ` + (selected === "short" ? "active" : null)} 
                        onClick={() => {this.setState({selected: "short"})}}> Last Few Weeks </button>
                    </div>
                </div>

                <div className="Tracks-Body">
                    {selected==="long" && tracksAllTimes && tracksAllTimes.items && tracksAllTimes.items.map((track, index) => {
                        return (
                            <div className="Track-Container" key={index}>
                                <div className="Tracks-Element" >
                                    <a className="Tracks-Link" href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                                        <div className="Tracks-Image">
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
                                <div className="Track-Length">{this.getTrackLength(track.duration_ms)}</div>
                            </div>
                        )
                    })}

                    {selected==="medium" && tracks6Months && tracks6Months.items && tracks6Months.items.map((track, index) => {
                        return (
                            <div className="Track-Container" key={index}>
                                <div className="Tracks-Element" >
                                    <a className="Tracks-Link" href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                                        <div className="Tracks-Image">
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
                                <div className="Track-Length">{this.getTrackLength(track.duration_ms)}</div>
                            </div>
                        )
                    })}

                    {selected==="short" && tracks4Weeks && tracks4Weeks.items && tracks4Weeks.items.map((track, index) => {
                         return (
                             <div className="Track-Container" key={index}>
                                 <div className="Tracks-Element" >
                                     <a className="Tracks-Link" href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                                         <div className="Tracks-Image">
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
                                 <div className="Track-Length">{this.getTrackLength(track.duration_ms)}</div>
                             </div>
                         )
                    })}
                </div>
                
            </div>
        )
    }
}

export default Tracks;
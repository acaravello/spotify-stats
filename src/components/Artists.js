import React, {Component} from "react";
import "./Artists.css";
import {getTopArtists6Months, getTopArtists4Weeks} from "../utils/spotify";

class Artists extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artists6Months: {},
            artists4Weeks: {},
            selected : "long"
        }

        this.getArtistsInfo = this.getArtistsInfo.bind(this);
 
    }

    componentDidMount() {
        this.getArtistsInfo(); 
    }


    async getArtistsInfo() {
        const [dataMedium, dataShort] = await Promise.all([
            getTopArtists6Months(),
            getTopArtists4Weeks()
        ]);

        this.setState ({
            artists6Months: dataMedium.data,
            artists4Weeks: dataShort.data
        })

    }
    
    render() {

        const {artists6Months, artists4Weeks, selected} = this.state;
        const {artistsAllTimes} = this.props;

        return(
            <div className="Artists">

                <div className="Artists-Header">
                    <div className="Artists-Title">
                        Top Artists
                </div>
                    <div className="Artists-RangeSelector">
                        <button className={`RangeSelector-Button ` + (selected === "long" ? "active" : null)} 
                        onClick={() => this.setState({selected: "long"})}> All Times </button>
                        <button className={`RangeSelector-Button ` + (selected === "medium" ? "active" : null)} 
                        onClick={() => {this.setState({selected: "medium"})}}> Last Few Months </button>
                        <button className={`RangeSelector-Button ` + (selected === "short" ? "active" : null)} 
                        onClick={() => {this.setState({selected: "short"})}}> Last Few Weeks </button>
                    </div>
                </div>

                <div className="Artists-Body">
                    {selected==="long" && artistsAllTimes && artistsAllTimes.items && artistsAllTimes.items.map((artist, index) => {
                        return (
                            <div className="Artist-Element" key={index}>
                                <a className="Artists-Link" href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <div className="Artists-Image">
                                        <img src={artist.images[0].url} alt={artist.name} />
                                    </div>
                                    <div className="Artists-Name">{artist.name}</div>
                                </a>
                            </div>
                        )
                    })}

                    {selected==="medium" && artists6Months && artists6Months.items && artists6Months.items.map((artist, index) => {
                        return (
                            <div className="Artist-Element" key={index}>
                                <a className="Artists-Link" href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <div className="Artists-Image">
                                        <img src={artist.images[0].url} alt={artist.name} />
                                    </div>
                                    <div className="Artists-Name">{artist.name}</div>
                                </a>
                            </div>
                        )
                    })}

                    {selected==="short" && artists4Weeks && artists4Weeks.items && artists4Weeks.items.map((artist, index) => {
                         return (
                            <div className="Artist-Element" key={index}>
                                <a className="Artists-Link" href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
                                    <div className="Artists-Image">
                                        <img src={artist.images[0].url} alt={artist.name} />
                                    </div>
                                    <div className="Artists-Name">{artist.name}</div>
                                </a>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default Artists;
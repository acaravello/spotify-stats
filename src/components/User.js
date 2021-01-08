import React, {Component} from "react";
import "./User.css";
import Navbar from "./Navbar";
import Routes from "./Routes";
import { getUserInfo } from "../utils/spotify";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        this.getInfo();
    }

    async getInfo() {
        const data = await getUserInfo();
        let dataRetrieved = data.data;
        this.setState({userInfo: {...dataRetrieved}});
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


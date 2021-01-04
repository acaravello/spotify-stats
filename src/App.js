import React, {Component} from "react";
import './App.css';
import Login from "./components/Login";
import User from "./components/User";
import {checkToken} from "./utils/spotify";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: ""
    }
  }

  componentDidMount() {
    this.setState({
           token: checkToken()
         });
  }

  render() {

    const {token} = this.state;  

    return (
      <div className="App">
        {token ? <User /> : <Login />}
      </div>
    );
  }

}

export default App;

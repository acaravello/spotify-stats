import './App.css';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => {return <Login />} } />
        <Route exact path="/home" render={() => {return <Home />} } />
      </Switch>
        
    </div>
  );
}

export default App;

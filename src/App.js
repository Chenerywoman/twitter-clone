import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav';
import Search from "./components/Search"
import Notifications from "./components/Notifications"
import Mail from "./components/Mail"

function App() {
  return (
    <div className="App">
      
      <div className="navBar">
    <NavBar/>
    <BrowserRouter>
    <Switch>
      <Route path="/search" component={Search}/>
      <Route path="/notifications" component={Notifications}/>
      <Route path="/mail" component={Mail}/>
    </Switch>
    </BrowserRouter>
    </div>
    </div>
    
  );
}

export default App;

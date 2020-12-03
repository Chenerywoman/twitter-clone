import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav';
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Mail from "./components/Mail";
import TwitterFeed from "./components/TwitterFeed"

function App() {
  return (
    <div className="App">
      <Header />
   
      
      <div className="navBar">
    <NavBar/>
    <BrowserRouter>
    <Switch>
      <Route path="/search" component={Search}/>
      <Route path="/notifications" component={Notifications}/>
      <Route path="/mail" component={Mail}/>
    </Switch>
    <TwitterFeed />
    </BrowserRouter>
    </div>
    </div>
    
  );
}

export default App;

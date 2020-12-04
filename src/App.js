import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Nav";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Mail from "./components/Mail";
import TweetsHolder from "./components/TweetsHolder";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />

        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/mail" component={Mail} />
            <TweetsHolder />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;

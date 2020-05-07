import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="main-container">
            <div className="nav-bar">
              <NavLink exact to="/">
                <div className="logo"></div>
              </NavLink>
              <div className="hamburger-menu">menu</div>
            </div>

            <Switch>
              <Route exact path="/">
                <h1>home</h1>
              </Route>
              <Route path="/about">
                <h1>about</h1>
              </Route>
              <Route path="/project">
                <h1>project</h1>
              </Route>
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
          </div>

          <div className="menu-container">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/about">
              About
            </NavLink>
            <NavLink exact to="/project">
              Project
            </NavLink>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

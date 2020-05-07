import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    };

    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler() {
    this.setState({
      menu: !this.state.menu,
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {!this.state.menu ? (
            <div className="main-container">
              <div className="nav-bar">
                <NavLink exact to="/">
                  <div className="logo"></div>
                </NavLink>

                <div className="hamburger-menu">
                  <button
                    onClick={this.menuHandler}
                    className="burger-icon"
                  ></button>
                </div>
              </div>

              <Switch>
                <Route exact path="/">
                  <div className="content">
                    <h1>home</h1>
                  </div>
                </Route>
                <Route path="/about">
                  <div className="content">
                    <h1>about</h1>
                  </div>
                </Route>
                <Route path="/project">
                  <div className="content">
                    <h1>project</h1>
                  </div>
                </Route>
                <Route>
                  <div className="error-page">
                    <div>Not Found...</div>
                    <h2>¯\_(ツ)_/¯</h2>
                  </div>
                </Route>
              </Switch>
            </div>
          ) : (
            <div className="menu-container">
              <NavLink
                className="menu-item"
                onClick={this.menuHandler}
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="menu-item"
                onClick={this.menuHandler}
                exact
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="menu-item"
                onClick={this.menuHandler}
                exact
                to="/project"
              >
                Project
              </NavLink>
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

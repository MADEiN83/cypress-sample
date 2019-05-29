import React, { Component, Fragment } from "react";
import logo from "../../logo.svg";
import "../../assets/css/App.css";

interface IProps {}

interface IState {}

class Home extends Component<IProps, IState> {
  _renderContent = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };

  render = () => {
    return <Fragment>{this._renderContent()}</Fragment>;
  };
}

export default Home;

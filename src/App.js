import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/saludo/Saludo";
import AjaxComponent from "./components/ajax-component/AjaxComponent";
import TimerComponent from "./components/TimerComponent/TimerComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Saludo />
        <TimerComponent />
        <div styles="background: #444; color: #fafafa;">
          <AjaxComponent />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
  }
}

export default App;

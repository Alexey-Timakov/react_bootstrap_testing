import React, { Component } from "react";
import ReactDOM from "react-dom";

function Clock() {
    const element = (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  
  setInterval(Clock, 1000);

  export default Clock;
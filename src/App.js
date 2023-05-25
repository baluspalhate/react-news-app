import "./App.css";
import Navbar from "./Componts/Navbar";
import News from "./Componts/News";
import React, { Component } from "react";
// import Stopwatch from "./Componts/Stopwatch";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={6} />
        {/* <Stopwatch /> */}
      </div>
    );
  }
}
export default App;

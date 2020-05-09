import React from "react";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Projects />
      </div>
    );
  }
}

export default App;

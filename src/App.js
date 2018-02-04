import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph/Graph.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>GreenHouse Temperature Monitor</h2>
        </div>
        <div className="Graph-container">
          <Graph />
          <Graph empty={true}/>
        </div>
      </div>
    );
  }
}

export default App;

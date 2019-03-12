import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from "./components/Movie/MovieForm";

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Movies
          </h1>
        </header>

        <MovieForm/>
      </div>
    );
  }
}

export default App;

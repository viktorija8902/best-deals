import React, { Component } from 'react';
import '../styles/index.css';
import Header from "./Header";
import SearchForm from "./SearchForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchForm/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchContainer from './containers/SearchContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Search Box App</h2>
        <SearchContainer/>
      </div>
    );
  }
}

export default App;

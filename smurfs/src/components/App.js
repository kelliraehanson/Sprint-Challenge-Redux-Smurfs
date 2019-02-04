import React, { Component } from 'react';
import './App.css';
import { SmurfListView } from './views';
import { AddSmurfView } from './views';

// import SmurfListView from '../views/SmurfListView';
// import AddSmurfView from '../views/AddSmurfView';


class App extends Component {

  render() {
    return (
      <div className="App">
      <img src="https://images.justwatch.com/backdrop/46395655/s1440/the-smurfs"></img><br>
      </br>
      <h1>Smurf Village!</h1>
        <SmurfListView />
        <AddSmurfView />
      </div>
    );
  }
}

export default App;
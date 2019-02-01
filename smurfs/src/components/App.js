import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
// import SmurfList from './SmurfList';
import Smurfs from './Smurfs';
import { connect } from "react-redux";
import {getSmurfs, deleteSmurf} from '../actions/index';


class App extends Component {

  render() {
    return (
      <div className="App">
      <img src="https://images.justwatch.com/backdrop/46395655/s1440/the-smurfs"></img><br>
      </br>
      <h1>Smurf Village!</h1>
        <SmurfForm/>
        <Smurfs
        deleteSmurf={this.props.deleteSmurf}/>
      </div>
    );
  }
}

export default App;

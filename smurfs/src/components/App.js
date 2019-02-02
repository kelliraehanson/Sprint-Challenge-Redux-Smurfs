import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm';
import { addSmurf } from '../actions/index'


class App extends Component {

  render() {
    return (
      <div className="App">
      <img src="https://images.justwatch.com/backdrop/46395655/s1440/the-smurfs" alt="smurfs"></img><br>
      </br>
        <SmurfList />
        <SmurfForm submit={this.props.addSmurf}/>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(App);
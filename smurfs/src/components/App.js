import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <h2>Loading Smurfs...</h2>
        ) : (
          <div className="App">
            <img src="https://images.justwatch.com/backdrop/46395655/s1440/the-smurfs" alt="smurfImage"></img><br></br>

            <h1>Welcome to Smurf Village!</h1>
            <SmurfForm />

            <h2>Smurf List:</h2>
            <SmurfList {...this.props} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf })(App);
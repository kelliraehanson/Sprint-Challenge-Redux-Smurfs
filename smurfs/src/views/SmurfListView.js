import React from "react";
import { connect } from "react-redux";

import SmurfsList  from "../components/SmurfList";
import { getSmurfs } from "../actions";

class SmurfsListView extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.getSmurfs();
    }
  
    render() {

      if (this.props.addingSmurf) {
        return <p>Loading Smurfs...</p>
      }
      return (
        <div className="FriendsList_wrapper">
          <SmurfsList smurfs={this.props.smurfs} />
        </div>
      );
    }
  }
  
  function mapStateToProps(state) {
    return{
      smurfs: state.rootReducer.smurfs,
      fetching: state.rootReducer.addingSmurf
    }
  }
  

  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfsListView);
  
import React, { Component } from "react";
import SmurfForm from "./SmurfForm";

import { connect } from "react-redux";
import { deleteSmurf } from '../actions'

class Smurfs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updating: false
    };
  }

  deleteSmurf= (event, id) => {
    event.preventDefault();
    this.props.deleteSmurf(id);
}

render() {
  return (
    <div className="Smurf">
      <div className="smurfInfo">
            <h2>NAME:{this.props.smurf.name}</h2>
            <p>AGE: {this.props.smurf.age}</p>
            <p>HEIGHT: {this.props.smurf.height}</p>
            <button>DELETE SMURF</button>
          <SmurfForm smurf={this.props.smurf} />
        )}
      </div>
    </div>
  );
}
}
const mapStateToProps = state => {
  return {
      updating: state.updating
  }
}


export default connect(mapStateToProps,
  { deleteSmurf })(Smurfs)




// import React from "react";

// const Smurfs = props => {
    
//   return(
//     <div>
//       <h2>NAME:{props.smurf.name}</h2>
//       <p>AGE: {props.smurf.age}</p>
//       <p>HEIGHT: {props.smurf.height}</p>
//       <button>DELETE SMURF</button>
//     </div>
//   )
// }

// export default Smurfs;

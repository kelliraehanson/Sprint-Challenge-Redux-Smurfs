import React from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";

class SmurfList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetching) {
      return (
        <div>
          <h2>Finding your Smurfs...</h2>
        </div>
      );
    }
    return (
      <div>
        <div className="Smurfs--test">
          <div className="Smurfs">
            {this.props.smurfs.map(smurf => {
              return <Smurfs key={smurf.id} smurf={smurf} />;
              
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPops = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  };
};

export default connect(
  mapStateToPops,
  { getSmurfs }
)(SmurfList);




// import React from "react";
// import Smurfs from "./Smurfs";

// const SmurfList = props => {
//   return (
//     <div>
//       {props.smurfs.map(smurf => {
//         return <Smurfs 
//         key={smurf.id} 
//         smurf={smurf} />;
//       })}
//     </div>
//   );
// };

// export default SmurfList;




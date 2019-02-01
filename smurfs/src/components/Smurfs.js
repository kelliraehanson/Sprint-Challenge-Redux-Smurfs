import React from "react";

const Smurfs = props => {
    console.log(props.smurfs)
  return(
    <div>
      <h2>NAME:{props.name}</h2>
      <p>AGE: {props.age}</p>
      <p>HEIGHT: {props.height}</p>
      <button onClick={()=>props.delete(props.smurf.id)}>DELETE SMURF</button>
    </div>
  )
}

export default Smurfs;



//I was working on this:

// import React from "react";
// import { connect } from "react-redux";
// import { getSmurfs } from "../actions";
// import SmurfList from "./SmurfList";
// // import rootReducer from './rootReducer';

// class Smurfs extends React.Component {
//     constructor() {
//       super();
//     }
  
//     componentDidMount() {
//       this.props.getSmurfs();
//     }
  
//     render() {

//       if (this.props.fetching) {
//         return <p>Loading Smurfs...</p>
//       }
//       return (
//         <div>
//         <h2>NAME:{this.props.smurf.name}</h2>
//         <p>AGE: {this.props.age}</p>
//         <p>HEIGHT: {this.props.height}</p>
//         <button onClick={()=>this.props.delete(this.props.smurf.id)}>DELETE SMURF</button>
//         </div>
//       );
//     }
//   }
  
//   function mapStateToProps(state) {
//     return{
//       smurfs: state.rootReducer.smurfs,
//       fetching: state.rootReducer.fetching
//     }
//   }
  

//   export default connect(
//     mapStateToProps,
//     { getSmurfs }
//   )(Smurfs);
  

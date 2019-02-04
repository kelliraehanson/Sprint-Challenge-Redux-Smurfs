import React from "react";
import Smurfs from "./Smurfs";

// import { deleteFriend } from '../actions';


const SmurfList = props => {
  
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurfs 
        key={smurf.name} 
        smurf={smurf} 
        />;
      })}
    </ul>
  );
};


export default SmurfList;






// import React from "react";
// import { getSmurfs } from "../actions";
// import { connect } from "react-redux";
// import Smurfs from "./Smurfs";

// class SmurfsList extends React.Component {
//     constructor() {
//         super();
//     }

//   render() {

//     if (this.props.fetching) {
//       return <h1>Finding your Smurfs...</h1>
//     }
//     return (
//       <div>
//         {this.props.smurfs.map(smurf => {
//         return <Smurfs 
//         key={smurf.id}  
//         smurf={smurf} />;
//       })}
//           </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     smurfs: state.rootReducer.smurfs,
//     addingSmurf: state.rootReducer.addingSmurf
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getSmurfs }
// )(SmurfsList);






// import React from "react";
// import Smurfs from "./Smurfs";
// import { getSmurfs } from "../actions";
// import { connect } from "react-redux";

// class SmurfsList extends React.Component {
//     componentDidMount() {
//       this.props.getSmurfs();
//     }

//     render() {
//         if (this.props.fetchingSmurfs) {
//           return (
//             <div>
//               <h1>Finding your Smurfs...</h1>
//             </div>
//           );
//         }

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

// const mapStateToPops = state => {
//     return {
//       smurfs: state.smurfs,
//       fetchingSmurfs: state.fetchingSmurfs
//     };
// };
  
//   export default connect(
//     mapStateToPops,
//     { getSmurfs }
//   )(SmurfsList);





// import React from "react";
// import { getSmurfs } from "../actions";
// import { connect } from "react-redux";
// import Smurfs from "./Smurfs";

// class SmurfList extends React.Component {
//   componentDidMount() {
//     this.props.getSmurfs();
//   }

//   render() {
//     if (this.props.fetching) {
//       return (
//         <div>
//           <h2>Finding your Smurfs...</h2>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <div className="Smurfs--test">
//           <div className="Smurfs">
//             {this.props.smurfs.map(smurf => {
//               return <Smurfs key={smurf.id} smurf={smurf} />;
              
//             })}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToPops = state => {
//   return {
//     smurfs: state.smurfs,
//     fetching: state.fetching
//   };
// };

// export default connect(
//   mapStateToPops,
//   { getSmurfs }
// )(SmurfList);




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




import React from "react";
import Smurfs from "./Smurfs";

const SmurfsList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurfs 
        key={smurf.id} 
        name={smurf.name} 
        age={smurf.age} 
        smurf={smurf} 
        delete={smurf.delete}/>;
      })}
    </div>
  );
};

export default SmurfsList;






// import React from "react";
// import Smurfs from "./Smurfs";


// export default function SmurfList(props) {

//         return (
//             <div>
        
                                
//                 {this.props.smurfs.map(smurf => 
//                     <Smurfs 
//                     key={smurf.id} 
//                     name={smurf.name} 
//                     age={smurf.age} 
//                     height={smurf.height} />    
//                 )}
//             </div>
//         );
// }



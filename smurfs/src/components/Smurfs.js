import React from "react";

const Smurfs = props => {
    console.log(props.smurfs)
  return(
    <div>
      <h2>NAME:{props.smurf.name}</h2>
      <p>AGE: {props.smurf.age}</p>
      <p>HEIGHT: {props.smurf.height}</p>
      <button>DELETE SMURF</button>
    </div>
  )
}

export default Smurfs;

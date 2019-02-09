import React from "react";

const Smurfs = props => {
    console.log(props.smurfs)
  return(
    <div>
      <h3>NAME: {props.smurf.name}</h3>
      <p>AGE: {props.smurf.age}</p>
      <p>HEIGHT: {props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.id)}>DELETE SMURF</button>
    </div>
  )
}

export default Smurfs;

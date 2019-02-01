import axios from 'axios';

export const GETTING_SMURF = "GETTING_SMURF";
export const SUCCESS_SMURF = "SUCCESS_SMURF";
export const FAILURE_SMURF = "FAILURE_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURF });
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({ type: SUCCESS_SMURF, payload: response.data })
  })
  .catch(err => {
    dispatch({ type: FAILURE_SMURF, payload: err })
  })
}











/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const GETTING_SMURF = "GETTING_SMURF";
export const SUCCESS_SMURF = "SUCCESS_SMURF";
export const FAILURE_SMURF = "FAILURE_SMURF";

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';

export const DELETE_SUMRF = "DELETE_SUMRF_START";
export const DELETE_SUMRF_SUCCESS = "DELETE_SUMRF_SUCCESS";
export const DELETE_SUMRF_FAILURE = "DELETE_SUMRF_FAILURE";


export const getSmurfs = () =>  {
  const getSmurfs = 
  axios
  .get('http://localhost:3333/smurfs');
  return function (dispatch) {
    dispatch({ type: GETTING_SMURF, payload: true });
    getSmurfs
      .then(response => {
        console.log(response);
        dispatch({ 
          type: SUCCESS_SMURF, 
          payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: FAILURE_SMURF, 
          payload: err });
      })
  }
}

export const addSmurf = (smurf) => {

  const postSmurf = 
  axios
  .post('http://localhost:3333/smurfs', smurf);
  return function (dispatch) {
    dispatch({ type: ADDING_SMURF, payload: true });

    postSmurf
      .then(response => {
        dispatch({ 
          type: ADDED_SMURF,
          payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: FAILURE_SMURF, 
          payload: err });
      })      
  }
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SUMRF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_SUMRF_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ 
      type: DELETE_SUMRF_FAILURE, 
      payload: err }));
};
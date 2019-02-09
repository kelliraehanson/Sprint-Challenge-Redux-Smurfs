import axios from 'axios';

export const GETTING_SMURF = 'GETTING_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';
export const FAILURE_SMURF = 'FAILURE_SMURF';

export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const FAILURE_ADDING_SMURF = "FAILURE_ADDING_SMURF";

export const DELETE_SUMRF = "DELETE_SUMRF";
export const DELETE_SUMRF_SUCCESS = "DELETE_SUMRF_SUCCESS";
export const DELETE_SUMRF_FAILURE = "DELETE_SUMRF_FAILURE";


export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GETTING_SMURF });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: SUCCESS_SMURF, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FAILURE_SMURF, payload: err });
      });
  };
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: SMURF_ADDED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FAILURE_ADDING_SMURF, payload: err });
    });
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_SUMRF });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETE_SUMRF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_SUMRF_FAILURE, payload: err.message });
      });
  };
};
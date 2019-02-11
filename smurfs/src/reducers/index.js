import {
  GETTING_SMURF, SUCCESS_SMURF, FAILURE_SMURF, ADDING_SMURF, SMURF_ADDED, FAILURE_ADDING_SMURF, DELETE_SUMRF, DELETE_SUMRF_SUCCESS, DELETE_SUMRF_FAILURE
} from "../actions";
const initialState = {
  smurfs: [],
  fetching: false,
  smurfsSuccess: false,
  addingSmurf: false,
  smurfAdded: false,
  deletingSmurf: false,
  smurfDeleted: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GETTING_SMURF:
      return {
        ...state,
        fetching: true
      };

    case SUCCESS_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false,
        smurfsSuccess: true
      };

    case FAILURE_SMURF:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    case ADDING_SMURF:
      return { ...state, addingSmurf: true };

    case SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        smurfAdded: true,
        smurfs: action.payload
      };

    case FAILURE_ADDING_SMURF:
      return { ...state, addingSmurf: false, error: action.payload };

    case DELETE_SUMRF:
      return { ...state, smurfDeleted: false, deletingSmurf: true };

    case DELETE_SUMRF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfDeleted: true,
        smurfs: action.payload
      };

    case DELETE_SUMRF_FAILURE:
      return { ...state, deletingSmurf: false, error: action.payload };

    default:
      return state;
  }
};
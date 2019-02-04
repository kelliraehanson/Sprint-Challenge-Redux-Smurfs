import{ GETTING_SMURF, SUCCESS_SMURF, FAILURE_SMURF, ADDING_SMURF, ADDED_SMURF } from "../actions";
const initialState = {
  smurfs: [],
  fetching: false,
  addingSmurf: false,
  error: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURF:
    return {
      ...state,
      fetching: true
    }
    case SUCCESS_SMURF:
    return {
      ...state,
      fetching: false,
      error: null,
      smurfs: action.payload

    }
    case FAILURE_SMURF:
    return {
      ...state,
      fetching: false,
      error: action.payload
    }
    case ADDING_SMURF:
    return {
      ...state,
      addingSmurf: action.payload
    }

    case ADDED_SMURF:
    return {
      ...state,
      smurfs: state.smurfs.concat(action.payload),
      addingSmurf: false

    }

  }
}

export default rootReducer;
import{ GETTING_SMURF, SUCCESS_SMURF, FAILURE_SMURF, ADDING_SMURF, ADDED_SMURF } from "../actions";
const initialState = {
  smurfs: [],
  fetching: false,
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
      smurfs: Selection.payload

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
      fetching: action.payload
    }

    case ADDED_SMURF:
    return {
      ...state,
      smurfs: state.smurfs.concat(action.payload),
      fetching: false

    }

  }
}

export default rootReducer;
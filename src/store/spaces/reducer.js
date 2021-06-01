import { FETCH_SPACES_SUCCESS } from "./actions"

const initialState = []


export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SPACES_SUCCESS: {
          return [
              ...state,
              ...action.payload
          ]
      } 

  
      default:
        return state;
    }
  };
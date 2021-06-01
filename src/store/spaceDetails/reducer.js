import { FETCH_SPACE_SUCCESS } from './actions'

const initialState = {
    stories: []
}


export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SPACE_SUCCESS: {
          return {
              ...state,
              ...action.payload
          }
      } 

  
      default:
        return state;
    }
  };
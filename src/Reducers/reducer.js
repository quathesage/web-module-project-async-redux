import { GET_COIN, ERROR, SUCCESS } from "../Actions/actions"

const initialState = {
  coin: {},
  isLoading: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_COIN :
      return {
        ...state,
        coin: {},
        isLoading: true,
        error: ''
      };
      case SUCCESS :
      return {
        ...state,
        coin: action.payload,
        isLoading: false,
        error: ''
      }
    case ERROR :
      return {
        error: action.payload
      };
    default :
      return state
  }
}
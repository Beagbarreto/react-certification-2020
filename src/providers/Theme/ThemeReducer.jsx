import { 
  TOGGLE_DARK_MODE,
  LOGGED_USER,
  SELECTED_VIDEO,
} from '../../utils/constants';

const theReducer = (state, action) => {
  console.log('REDUCER:', action.payload)
  switch(action.type) {
    case TOGGLE_DARK_MODE: {
      //storage.setItem("isDark", !state.isDark)
      return {
        ...state,
        theme: action.payload
      }
    }
    case LOGGED_USER: {
      return {
        ...state,
        logged: action.payload
      }
    }
    case SELECTED_VIDEO: {
      return {
        ...state,
        selectedVideo: action.payload
      }
    }
    default:
      throw new Error("Unkown action");
  }
}

export default theReducer;

import { context } from "./ThemeProvider";
import { themes } from '../../utils/constants';
import { TOGGLE_DARK_MODE, SEARCH_VIDEOS } from '../../utils/constants';

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

    case SEARCH_VIDEOS: {
      return {
        ...state,
        video: action.payload
      }
    }
    default:
      throw new Error("Unkown action");
  }
}

export default theReducer;



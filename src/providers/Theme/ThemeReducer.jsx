import { 
  TOGGLE_DARK_MODE,
  LOGGED_USER,
  SELECTED_VIDEO,
  TOGGLE_STAR,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FAVORITE_VIDEOS,
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
    case TOGGLE_STAR: {
      return {
        ...state,
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
    case FAVORITE_VIDEOS: {
      return {
        ...state,
        favoriteVideos: action.payload
      }
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favoriteVideos: [
        ...state.favoriteVideos,
        action.payload],
      }
    }
    case DELETE_FAVORITE: {
      const deleted = state.favoriteVideos[action.payload];
     //delete id from array, probably etag
      return {
        ...state,
        favoriteVideos: state.favoriteVideos.filter((fav, i) => i !== action.payload),
      };
    }
    default:
      throw new Error("Unkown action");
  }
}

export default theReducer;

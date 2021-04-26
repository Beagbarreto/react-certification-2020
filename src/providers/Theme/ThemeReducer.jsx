import { 
  TOGGLE_DARK_MODE,
  SEARCH_VIDEOS,
  LOGGED_USER,
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
    case SEARCH_VIDEOS: {
      return {
        ...state,
        videos: action.payload
      }
    }
    case LOGGED_USER: {
      return {
        ...state,
        logged: action.payload
      }
    }
    default:
      throw new Error("Unkown action");
  }
}

export default theReducer;






// export default function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD_VIDEOS':
//       return {
//         ...state,
//         firstLoad: false,
//         videos: [...action.payload.videos],
//       };
//     case 'SET_SELECTED_VIDEO':
//       return {
//         ...state,
//         selectedVideo: action.payload.selectedVideo,
//       };
//     case 'SET_CURRENT_SESSION':
//       localStorage.setItem(
//         'youtubeSession',
//         JSON.stringify({
//           currentSession: action.payload.currentSession,
//         })
//       );
//       /* eslint-disable no-case-declarations */
//       const sessionFavorite = JSON.parse(
//         localStorage.getItem(`${action.payload.currentSession.id}#favoriteVideos`)
//       );
//       /* eslint-disable no-case-declarations */
//       const sessionTheme = JSON.parse(
//         localStorage.getItem(`${action.payload.currentSession.id}#theme`)
//       );

//       return {
//         ...state,
//         currentSession: action.payload.currentSession,
//         favoriteVideos: sessionFavorite ? sessionFavorite.favoriteVideos : [],
//         currentTheme: sessionTheme,
//       };
//     case 'CLEAR_CURRENT_SESSION':
//       localStorage.removeItem('youtubeSession');
//       return {
//         ...state,
//         currentSession: null,
//         favoriteVideos: [],
//         currentTheme: 'light',
//       };
//     case 'ADD_TO_FAVORITE':
//       const { favoriteVideos, currentSession } = state;
//       /* eslint-disable no-case-declarations */
//       localStorage.setItem(
//         `${currentSession.id}#favoriteVideos`,
//         JSON.stringify({
//           favoriteVideos: [...favoriteVideos, action.payload.video],
//         })
//       );
//       return {
//         ...state,
//         favoriteVideos: [...favoriteVideos, action.payload.video],
//       };
//     case 'REMOVE_FROM_FAVORITE':
//       localStorage.setItem(
//         `${state.currentSession.id}#favoriteVideos`,
//         JSON.stringify({
//           favoriteVideos: state.favoriteVideos.filter(
//             (item) => item.id !== action.payload.video.id
//           ),
//         })
//       );
//       return {
//         ...state,
//         favoriteVideos: state.favoriteVideos.filter(
//           (item) => item.id !== action.payload.video.id
//         ),
//       };

//     default:
//       throw new Error('Unkown action');
//   }
// }

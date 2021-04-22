import config from '../components/config';

const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const REACT_APP_YOUTUBE_API_KEY = config.api_key;
const BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

const SEARCH_VIDEOS ='SEARCH_VIDEOS';

const LOGGED_USER = 'LOGGED_USER';

const themes = {
    light: {
      font: 'black',
      background: 'white',
      isDark: false,
    },
    dark: {
      font: 'white',
      background: '#101010',
      isDark: true,
    }
  };

export { AUTH_STORAGE_KEY, REACT_APP_YOUTUBE_API_KEY, BASE_URL, themes, TOGGLE_DARK_MODE, SEARCH_VIDEOS, LOGGED_USER};

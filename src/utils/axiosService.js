import axios from 'axios';
import config from '../components/config';
import { REACT_APP_YOUTUBE_API_KEY, BASE_URL } from './constants';

const KEY = REACT_APP_YOUTUBE_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    maxResults: 16,
    key: KEY
  }
});


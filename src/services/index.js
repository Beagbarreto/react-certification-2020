import axios from 'axios';
import config from '../components/config';

const { api_key, channel_id } = config;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const httpInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    part: 'snippet',
    maxResults: 12,
    key: KEY
}
});

export const getPopularVideos = async () => {
  return httpInstance.get(`videos?&chart=mostPopular`, {
  })
};

export const getSearch = async (search) => {
  return httpInstance.get(`search`, {
    q: search,
    type: 'video' 
  })
};

export const getVideoInf = async (videoID) => {
  return httpInstance.get(`videos`, {
    id: videoID
  })
};


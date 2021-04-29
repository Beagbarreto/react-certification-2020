import axiosService from './axiosService';
import mock from '../../mockData/youtube-videos-mock.json';

const searchingVideos = async (query) => {
  let res;
  //if (provess.env.NODE_ENV === 'development') {
    // res = {
    //   data: mock,
    // }
   // const items = mock.items.filter((item) => item.snippet.title.includes(query));
  //} else {
    res = await axiosService.get(`/search`, {
      params: {
        type: 'video',
        q: query,
        videoEmbeddable: true,
      }
    })
  //}
  return res;
};

export default searchingVideos;
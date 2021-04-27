import axiosService from './axiosService';
import mock from '../../mockData/youtube-videos-mock.json';

const searchingVideos = async (query) => {
  let res;
  // if (provess.env.NODE_ENV === 'development') {
  //   res = {
  //     data: mock,
  //   }
//let mockData = mock;
    // let items = [];
    // mockData.filter(items.push())
    // }
  // } else {
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
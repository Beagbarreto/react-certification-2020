// import {useState, useEffect} from 'react';
// import youtube from '../apis/youtube';

// const useRelatedVideos = (query) => {
//   const [videos, setVideos] = useState([]);

//   const handleSubmit = async (search) => {

//     try{
//       const response = await axiosInstance.get('/search', {
//         params: {
//           relatedToVideoId: search,
//           type: 'video',
//           part: 'snippet'
//         }
//       })
      
//       setVideos(response.data.items);
//     } catch (error) {
//       console.log(error);
//     }    
//   }

//   useEffect(()=>{
//     handleSubmit(query)
//   }, [query])

//   return [videos];
// }

// export default useRelatedVideos;
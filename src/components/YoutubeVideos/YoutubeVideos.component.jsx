import React, { useState, useEffect } from 'react';
import config from '../../components/config';
import { VideoCard } from '../molecules';
import { VideoList } from './YoutubeVideos.styles';
import axiosService from '../../utils/axiosService';

const YoutubeVideos = () => {
  const { api_key, channel_id } = config;
  const [videos, setVideos] = useState([]);
  // const [currentChannelId, setCurrentChannelId] = useState(channel_id);

  // const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

  //   useEffect(() => {
  //     const fetchData = async () => {
  //     try {
  //       const data = await fetch(`${baseUrl}${currentChannelId}`)
  //       .then(response => response.json());
  //       setVideos(data.items);
  //     } catch (error) {
  //       console.log(error, 'Could not retrieve videos, check your channel ID.');
  //     }
  //   }
  //   fetchData();
  //   }, [currentChannelId]);

  const fetchData = async () => {
    try {
      const res = await axiosService.get(`/playlistItems`, {
        params: {
          part : 'snippet',
          playlistId: config.wizeline_uploads,
        }
      })
      console.log(res);
      setVideos(res.data.items);
      console.log('-----RES: ', res.data.items)
    } catch(error) {
        console.log(error)
        error
      }
    }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <VideoList>
      {videos.map(video => <VideoCard key={video.etag} video={video} />)}
    </VideoList>
  );
};

export default YoutubeVideos;
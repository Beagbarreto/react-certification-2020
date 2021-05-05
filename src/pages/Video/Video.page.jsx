import React, { useContext, useEffect, useState } from 'react';
import {
  PageContainer,
  VideoList,
  RecommendedVideos,
  Display,
  Hr,
  Video,
  TextSection,
  Title,
  Description
} from './Video.styles';
import useStore from '../../providers/Theme';
import { SearchContext } from '../../providers/SearchContext';
import useRelatedVideos from '../../utils/hooks/useRelatedVideos';
import searchingVideos from '../../utils/services/videoServices';
import { VideoCard } from '../../components/molecules';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  let { videoId } = useParams();
  const [ videos ] = useRelatedVideos(videoId);
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  const { query } = useContext(SearchContext);
  const [ videoInf, setVideoInf ] = useState([]);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const videoInf = await searchingVideos(videoId)
        setVideoInf(videoInf.data.items)
        setTitle(videoInf.data.items[0].snippet.title)
        setDescription(videoInf.data.items[0].snippet.description)
      } catch{
        alert('No results were found')
      }
    }
    fetchData();
  }, [query]);

  return (
    <PageContainer>
      <Display >
        <Video
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
        />
        <TextSection>
          <Title>
            {title}</Title>
          <Hr />
          <Description>
            {description}
          </Description>
        </TextSection>
      </Display>
      <VideoList>
        <RecommendedVideos>
          {
            videos.map(video => 
              <VideoCard
                video={video}
                isSmall={true}
                key={video.etag}
                id={video.id.videoId}
              />
            )
          }
        </RecommendedVideos>
      </VideoList>
    </PageContainer>
  );
}

export default VideoPage;

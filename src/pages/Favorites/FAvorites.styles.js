import styled from 'styled-components';

export const VideoList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.5rem auto;
  max-width: 1280px;
  @media screen and (min-width: 1025px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 812px) {
    justify-content: center;
  }
`;

export const FavTitle = styled.h3`
  display: block;
  letter-spacing: 0px;
  font: Helvetica;
  color: #E92C8A;
  text-align: center;
  margin: 2.5rem;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    margin: 1.2rem;
  }
}
`;

export const NoVideos = styled.h3`
  display: block;
  letter-spacing: 2px;
  font: Helvetica;
  color: #6c56a3;
  text-align: center;
  margin: 2.5rem;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    margin: 1.2rem;
  }
}
`;

export const CardContainer = styled.div`
  display: block;
  flex-direction: column;
  // height: fit-content;
  width: 80%;
  height: 'fit-content';
  // width: 290px;
  // height: 237px;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 5px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: rgba(50, 44, 78, 0.15) 0px 5px 15px 0px;
  &:hover {
    position: 'absolute';
    opacity: 0.9;
    box-shadow: rgba(240, 51, 145, 1) 0px 2px 4px 0px,
      rgba(240, 51, 145) 0px 2px 16px 0px;
  }
  @media screen and (max-width: 812px) {
    width: 95%;
    max-width: 320px;
    // height: 320px;
  }
  cursor: default;
`;

// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

export const TextContainer = styled.div`
  margin: 0.5rem;
  margin-top: 1.1rem;
`;

export const ThumbnailImg = styled.div`
  display: block;
  height: 145px;
  width: 100%;
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid white;
`;

export const VideoTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #6c56a3;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  overflow: hidden;
  overflow: hidden;
  text-align: left;
  margin: 10px 0 8px;
  text-overflow: ellipsis;
`;

export const VideoDescription = styled.p`
  font-size: 12px;
  color: #6c56a3;
  font-weight: 400;
  font-family: 'Open Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
    Geneva, Verdana, sans-serif;
  text-align: left;
  margin: 0;
`;
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: block;
  flex-direction: column;
  // height: fit-content;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // width: 290px;
  // height: 237px;
  background-color: rgba(185, 134, 217, 0.2);
  border-radius: 6px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: rgba(50, 44, 78, 0.15) 0px 5px 15px 0px;
  &:hover {
    position: 'absolute';
    opacity: 0.6;
    box-shadow: rgba(254, 223, 3, 0.12) 0px 2px 4px 0px,
      rgba(254, 223, 3) 0px 2px 16px 0px;
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
  border-radius: 4px 4px 0 0;
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
  text-align: left;
  margin: 10px 0 8px;
`;